document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const roomType = encodeURIComponent(document.getElementById('room-type').value);
    const moveInDate = encodeURIComponent(document.getElementById('move-in-date').value);

    const message = `Booking Request: %0AName: ${name}%0AEmail: ${email}%0ARoom Type: ${roomType}%0AMove-in Date: ${moveInDate}`;
    const phoneNumber = "+254711374759";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, '_blank');
});
                                          
