(function() {
  function setInput(selector, val) {
    const el = document.querySelector(selector);
    if (el) {
      el.focus();
      el.value = val;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
      el.dispatchEvent(new Event('blur', { bubbles: true }));
      return true;
    }
    return false;
  }

  // Name
  setInput('input[placeholder*="Name"], input[name*="name"], input[data-q="full_name"]', 'Umer Waqas');
  
  // Whatsapp / Phone
  setInput('input[placeholder*="Whatsapp"], input[type="tel"], input[name*="phone"]', '+923459347900');
  
  // Email
  setInput('input[type="email"], input[name*="email"]', 'um.waqas.khan@gmail.com');
  
  // City
  setInput('input[placeholder*="City"], input[name*="city"]', 'Peshawar');

  const textareas = document.querySelectorAll('textarea, input[type="text"]');
  console.log("Found inputs:", textareas.length);
})();
