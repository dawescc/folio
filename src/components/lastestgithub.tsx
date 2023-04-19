import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function GithubRelease({ repo }) {
  const [version, setVersion] = useState('');

  useEffect(() => {
    axios.get(`https://api.github.com/repos/dawescc/${repo}/releases/latest`)
      .then(response => {
        setVersion(response.data.tag_name);
      })
      .catch(error => {
        console.log(error);
      });
  }, [repo]);

  return (

      <a href={`https://github.com/dawescc/${repo}/archive/refs/tags/${version}.zip`}
      className="mt-10 block w-full rounded-md bg-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
  >
    <div className="">
      <p>Download</p>
      <p>{version} <FontAwesomeIcon icon={faDownload} name="Download" className="text-slate-900 align-baseline" /></p>
    </div>
  </a>
  );
}

export default GithubRelease;