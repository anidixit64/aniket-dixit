import React from "react";
import { FiDownload, FiFileText, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const WritingCard = ({ w, tabId }) => {
    return (
        <div>
            {tabId === "react-native" ? (
                <a
                    href={w.app}
                    download={w.title}
                    target='_blank'
                    rel='noreferrer'
                    className='writing-link-group'>
                    <div className='writings-card'>
                        <div className='writings-container'>
                            <div className='top-writing'>
                                <FiFileText className='writing-doc' />
                                <div className='right'>
                                    <a
                                        href={w.app}
                                        download={w.title}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='writing-link'>
                                        <FiDownload />
                                    </a>
                                </div>
                            </div>
                            <div className='mid-writing'>
                                <p className='writing-title'>{w.title}</p>
                                <p className='writing-desc'>{w.desc}</p>
                            </div>
                            <div className='bottom-writing'>
                                <small>{w.publication}</small>
                            </div>
                        </div>
                    </div>
                </a>
            ) : (
                <Link to={w.site} target='_blank' className='writing-link-group'>
                    <div className='writings-card'>
                        <div className='writings-container'>
                            <div className='top-writing'>
                                <FiFileText className='writing-doc' />
                                <div className='right'>
                                    <Link className='writing-link' to={w.site} target='_blank'>
                                        <FiExternalLink />
                                    </Link>
                                </div>
                            </div>
                            <div className='mid-writing'>
                                <p className='writing-title'>{w.title}</p>
                                <p className='writing-desc'>{w.desc}</p>
                            </div>
                            <div className='bottom-writing'>
                                <small>{w.publication}</small>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default WritingCard;
