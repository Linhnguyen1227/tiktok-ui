import { useEffect, useRef, useState } from 'react';

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
import search from '~/apiServices/searchServices';
const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef();
    const [showloading, setShowLoading] = useState(false);
    const [showResults, setShowResults] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const debounce = useDebounce(inputValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setShowLoading(true);
        // fetch(
        //     `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        //         debounce,
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
                const result = await search(debounce);

                setSearchResult(result);
                setShowLoading(false);
            } catch (error) {
                setShowLoading(false);
            }
        };
        fetchApi();
    }, [debounce]);

    const handleClear = () => {
        setInputValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleSearchResult = () => {
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
                onClickOutside={handleSearchResult}
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
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
