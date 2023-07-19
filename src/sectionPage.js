import React from 'react';
import './PageWithIframe.css';

const PageWithIframe = () => {
  return (
    <div className="page-container">
      <div className="iframe-container">
        <iframe src="/weather-app/index.html" title="External Document" />
      </div>
      <div className="co-white text-container">
        <h1 className='text-center mb-4'>Weather App</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, iaculis id nunc at, viverra egestas nunc. Suspendisse leo magna, lacinia eu magna in, cursus ultrices nunc. Pellentesque nisi mi, interdum ac mi vitae, varius euismod purus. Etiam id lorem velit. Maecenas id finibus ligula, at rhoncus sapien. Nam sapien tellus, maximus nec lacinia hendrerit, lacinia quis urna. Phasellus ultricies laoreet dui, ultricies eleifend dui sollicitudin ac. Fusce sodales vitae velit nec fringilla. Nunc a semper risus. Donec ut quam feugiat neque dignissim semper a a sapien. Vivamus ultricies, neque id suscipit eleifend, erat mauris tincidunt libero, id mattis ex felis vitae massa. Nunc ut vestibulum orci. Suspendisse potenti.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, iaculis id nunc at, viverra egestas nunc. Suspendisse leo magna, lacinia eu magna in, cursus ultrices nunc. Pellentesque nisi mi, interdum ac mi vitae, varius euismod purus. Etiam id lorem velit. Maecenas id finibus ligula, at rhoncus sapien. Nam sapien tellus, maximus nec lacinia hendrerit, lacinia quis urna. Phasellus ultricies laoreet dui, ultricies eleifend dui sollicitudin ac. Fusce sodales vitae velit nec fringilla. Nunc a semper risus. Donec ut quam feugiat neque dignissim semper a a sapien. Vivamus ultricies, neque id suscipit eleifend, erat mauris tincidunt libero, id mattis ex felis vitae massa. Nunc ut vestibulum orci. Suspendisse potenti.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante tellus, iaculis id nunc at, viverra egestas nunc. Suspendisse leo magna, lacinia eu magna in, cursus ultrices nunc. Pellentesque nisi mi, interdum ac mi vitae, varius euismod purus. Etiam id lorem velit. Maecenas id finibus ligula, at rhoncus sapien. Nam sapien tellus, maximus nec lacinia hendrerit, lacinia quis urna. Phasellus ultricies laoreet dui, ultricies eleifend dui sollicitudin ac. Fusce sodales vitae velit nec fringilla. Nunc a semper risus. Donec ut quam feugiat neque dignissim semper a a sapien. Vivamus ultricies, neque id suscipit eleifend, erat mauris tincidunt libero, id mattis ex felis vitae massa. Nunc ut vestibulum orci. Suspendisse potenti.</p>
      </div>
    </div>
  );
};

export default PageWithIframe;
