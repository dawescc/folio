import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface GithubStarsProps {
  repo: string;
}

function GithubStars({ repo }: GithubStarsProps) {
  const [stars, setStars] = useState('');

  useEffect(() => {
    axios.get(`https://api.github.com/repos/dawescc/${repo}`)
      .then(response => {
        setStars(response.data.stargazers_count);
      })
      .catch(error => {
        console.log(error);
      });
  }, [repo]);

  return (
    <div className="block max-w-fit mt-5 py-1 px-2 rounded-md text-center text-xs font-semibold text-slate-900 shadow-sm bg-yellow-300 outline outline-1 outline-offset-1 outline-slate-800">
      <span className="">
        {stars}</span>&nbsp;
      <FontAwesomeIcon icon={faStar} name="Star" className="align-center" />
      &apos;s on Github
    </div>
  );
}

export default GithubStars;