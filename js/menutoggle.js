let header =  document.getElementById("navbar");
let togglebtn =  document.getElementById("toggle");
let isNavVisible = false;
togglebtn.addEventListener("click", () => {
     // If the navigation is visible, hide it
     if (isNavVisible) {
         const outerDiv = document.querySelector(".active");
         outerDiv.remove();
         isNavVisible = false;
     } else { // If the navigation is hidden, show it
         const outerDiv = document.createElement('div');
         outerDiv.className = "active";
         
         const innerDiv = document.createElement('div');
         innerDiv.className = "nav-item";
         
         const menuItems = [
            { text: 'Home', href: 'index.html' },
             { text: 'Works', href: 'works.html' },
             { text: 'Service', href: 'service.html' },
             { text: 'Contact', href: 'contact.html' }
         ];

         menuItems.forEach(item => {
             const menuItem = document.createElement('a');
             menuItem.setAttribute('href', item.href);
             menuItem.textContent = item.text;
             innerDiv.appendChild(menuItem);
         });

         outerDiv.appendChild(innerDiv);
         header.after(outerDiv);
         isNavVisible = true;
     }
 });