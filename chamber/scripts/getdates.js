let copyright_year = new Date().getFullYear();
document.querySelector('#copyright').innerHTML = `©${copyright_year} | Richmond Chamber of Commerce`
document.querySelector('#lastModified').innerHTML = `Last Modified: ${document.lastModified}`;