import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { SearchIcon } from '../Icon';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItems';
import styles from './Search.module.scss';
import { useDebounce } from '~/component/hooks';
import search from '~/services/searchService';

const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef();
    const [showloading, setShowLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const debounceValue = useDebounce(inputValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setShowLoading(true);
        // fetch(
        //     `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        //         debounceValue,
        //     )}&type=more`,
        // )
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);

        //         setShowLoading(false);
        //     })
        //     .catch(() => {
        //         setShowLoading(false);
        //     });
        /**Axios
         *
         */
        const fetchApi = async () => {
            try {
                const result = await search(debounceValue);

                setSearchResult(result);
                setShowLoading(false);
            } catch (error) {
                setShowLoading(false);
            }
        };
        fetchApi();
    }, [debounceValue]);

    const handleClear = () => {
        setInputValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResults(false);
        if (!inputValue) {
            setSearchResult([]);
        }
    };

    const handleShowResult = () => {
        setShowResults(true);
    };

    return (
        //Using a wrapper <div>  tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                visible={showResults && searchResult.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={inputValue}
                        placeholder="Search"
                        spellCheck="false"
                        onChange={(e) => {
                            const valueSearch = e.target.value;
                            setInputValue(
                                valueSearch.startsWith(' ')
                                    ? valueSearch.trim()
                                    : valueSearch,
                            );
                        }}
                        onFocus={handleShowResult}
                    />
                    {inputValue && !showloading && (
                        <button className={cx('clear')}>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                onClick={handleClear}
                            />
                        </button>
                    )}
                    {showloading && (
                        <FontAwesomeIcon
                            className={cx('load')}
                            icon={faCircleNotch}
                        />
                    )}
                    <Link
                        className={cx('search-btn')}
                        to="/search"
                        onClick={(e) => {
                            searchResult.length === 0 && e.preventDefault();
                            setShowResults(false);
                        }}
                    >
                        <SearchIcon className={cx('search-icon')} />
                    </Link>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
