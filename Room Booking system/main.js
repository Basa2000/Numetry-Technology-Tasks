document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let roomType = document.getElementById('room-type').value;
    let date = document.getElementById('date').value;
    let startTime = document.getElementById('start-time').value;
    let endTime = document.getElementById('end-time').value;
    let meetingTitle = document.getElementById('meeting-title').value;
    
    let availableRoomsElement;

    switch(roomType) {
        case 'conference':
            availableRoomsElement = document.getElementById('conference-rooms');
            break;
        case 'meeting':
            availableRoomsElement = document.getElementById('meeting-rooms');
            break;
        case 'board':
            availableRoomsElement = document.getElementById('board-rooms');
            break;
    }

    let availableRooms = parseInt(availableRoomsElement.textContent);

    if (availableRooms > 0) {
        availableRooms--;
        availableRoomsElement.textContent = availableRooms;
        
        // Add booking details to the table
        let bookingTable = document.getElementById('booking-table').getElementsByTagName('tbody')[0];
        let newRow = bookingTable.insertRow();

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);

        cell1.textContent = roomType.charAt(0).toUpperCase() + roomType.slice(1) + ' Room';
        cell2.textContent = date;
        cell3.textContent = meetingTitle;
        cell4.textContent = startTime;
        cell5.textContent = endTime;

        alert('Room booked successfully!');
    } else {
        alert('No rooms available.');
    }
});
