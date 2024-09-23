{/* <script>
  const container = document.querySelector('.products-container');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Scroll functionality for the buttons
  prevBtn.addEventListener('click', () => {
    container.scrollBy({
      left: -container.clientWidth, // Adjusts scroll distance based on container width
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    container.scrollBy({
      left: container.clientWidth,
      behavior: 'smooth'
    });
  });
  const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalProductTitle');
const modalDescription = document.getElementById('modalProductDescription');
const closeBtn = document.querySelector('.close-btn');

// Get all product items
const productItems = document.querySelectorAll('.product-item');

// Add event listener to each product item
productItems.forEach(item => {
  item.addEventListener('click', function() {
    // Set the modal content
    const productName = this.querySelector('h3').innerText;
    const productDescription = this.getAttribute('data-description');
    
    modalTitle.innerText = productName;
    modalDescription.innerText = productDescription;

    // Display the modal
    modal.style.display = 'block';
  });
});

// Close the modal when close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

</script> */}
