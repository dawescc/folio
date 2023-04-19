import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <p>Latest version: {version}</p>
    </div>
  );
}

export default GithubRelease;