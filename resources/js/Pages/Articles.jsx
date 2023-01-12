import React from 'react'
import TextIntro from './../Components/TextIntro';
import App from './../Layouts/App';
function Articles() {

  const string = 'Sorry, this page not available now ..';
  return (
      <div className="flex items-center min-h-screen -mt-24 md:-mt-12">
          <TextIntro array={string.split("")} />
      </div>
  );
}

Articles.layout = page => <App children={page} />
export default Articles