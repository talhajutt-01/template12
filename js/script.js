const title = document.getElementById('title');


const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');

const h0 = document.getElementById('h0');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');

const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');
const s13 = document.getElementById('s13');

const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');


const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');
const t10 = document.getElementById('t10');
const t11 = document.getElementById('t11');
const t12 = document.getElementById('t12');
const t13 = document.getElementById('t13');

const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');


const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');

const g0 = document.getElementById('header');
const g1 = document.getElementById('banner');
const g2 = document.getElementById('service');
const g3 = document.getElementById('about');
const g4 = document.getElementById('choose');
const g5 = document.getElementById('team');
const g6 = document.getElementById('newsletter');
const g7 = document.getElementById('footer');


const img1 = document.getElementById('img1');
const img = document.getElementById('img');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}
function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}
  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);

            // Update content based on the current page
            

            updateLinkContent(nav0, mergedData.nav.nav0);
            updateLinkContent(nav1, mergedData.nav.nav1);
            updateLinkContent(nav2, mergedData.nav.nav2);
            updateLinkContent(nav3, mergedData.nav.nav3);
            updateLinkContent(nav4, mergedData.nav.nav4);

            updateContent(h0, mergedData.banner.h0);
            updateContent(h1, mergedData.banner.h1);
            updateContent(h2, mergedData.banner.h2);
            updateContent(h3, mergedData.banner.h3);

            updateContent(a0, mergedData.about.a0);
            updateContent(a1, mergedData.about.a1);
            updateContent(a2, mergedData.about.a2);

            updateContent(s0, mergedData.service.s0);
            updateContent(s1, mergedData.service.s1);
            updateContent(s2, mergedData.service.s2);
            updateContent(s3, mergedData.service.s3);
            updateContent(s4, mergedData.service.s4);
            updateContent(s5, mergedData.service.s5);
            updateContent(s6, mergedData.service.s6);
            updateContent(s7, mergedData.service.s7);
            updateContent(s8, mergedData.service.s8);
            updateContent(s9, mergedData.service.s9);
            updateContent(s10, mergedData.service.s10);
            updateContent(s11, mergedData.service.s11);
            updateContent(s12, mergedData.service.s12);
            updateContent(s13, mergedData.service.s13);

            updateContent(p0, mergedData.choose.p0);
            updateContent(p1, mergedData.choose.p1);
            updateContent(p2, mergedData.choose.p2);
            updateContent(p3, mergedData.choose.p3);
            updateContent(p4, mergedData.choose.p4);
            updateContent(p5, mergedData.choose.p5);
            updateContent(p6, mergedData.choose.p6);
            updateContent(p7, mergedData.choose.p7);
            updateContent(p8, mergedData.choose.p8);
            updateContent(p9, mergedData.choose.p9);
            updateContent(p10, mergedData.choose.p10);

            updateContent(t0, mergedData.team.t0);
            updateContent(t1, mergedData.team.t1);
            updateContent(t2, mergedData.team.t2);
            updateContent(t3, mergedData.team.t3);
            updateContent(t4, mergedData.team.t4);
            updateContent(t5, mergedData.team.t5);
            updateContent(t6, mergedData.team.t6);
            updateContent(t7, mergedData.team.t7);
            updateContent(t8, mergedData.team.t8);
            updateContent(t9, mergedData.team.t9);
            updateContent(t10, mergedData.team.t10);
            updateContent(t11, mergedData.team.t11);
            updateContent(t12, mergedData.team.t12);
            updateContent(t13, mergedData.team.t13);
         
            
            updateContent(n0, mergedData.newsletter.n0);
            updateContent(n1, mergedData.newsletter.n1);
            updateContent(n2, mergedData.newsletter.n2);
        
        
    
            updateContent(f0, mergedData.footer.f0);
            updateContent(f1, mergedData.footer.f1);
            updateContent(f2, mergedData.footer.f2);
            updateContent(f3, mergedData.footer.f3);
            updateContent(f4, mergedData.footer.f4);
            updateContent(f5, mergedData.footer.f5);

            updateBackgroundColor(g0, mergedData.color.header);
            updateBackgroundColor(g1, mergedData.color.banner);
            updateBackgroundColor(g2, mergedData.color.service);
            updateBackgroundColor(g3, mergedData.color.about);
            updateBackgroundColor(g4, mergedData.color.choose);
            updateBackgroundColor(g5, mergedData.color.team);
            updateBackgroundColor(g6, mergedData.color.newsletter);
            updateBackgroundColor(g7, mergedData.color.footer);
          
         
            updateImageSrc(img1, mergedData.images.img1);
            updateImageSrc(img, mergedData.images.img);
            updateImageSrc(img2, mergedData.images.img2);
            updateImageSrc(img3, mergedData.images.img3);
            updateImageSrc(img4, mergedData.images.img4);
            updateImageSrc(img5, mergedData.images.img5);
            updateImageSrc(img6, mergedData.images.img6);
            updateImageSrc(img7, mergedData.images.img7);
           
            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html') {
              updateContent(title, mergedData.title.title);
               
            } else if (fileName === 'about.html') {

            } else if (fileName === 'service.html') {

            } else if (fileName === 'team.html') {

            } else if (fileName === 'contact.html') {

            }else if (fileName === 'choose.html') {

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});