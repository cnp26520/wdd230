let copyright_year = new Date().getFullYear();
document.querySelector('#copyright').innerHTML = `©${copyright_year} | Christopher Petrinovich | Virginia`
document.querySelector('#lastModified').innerHTML = `Last Modified: ${document.lastModified}`;