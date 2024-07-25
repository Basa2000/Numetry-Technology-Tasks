


// ##########################################################################################

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let rowIndex = document.getElementById('row-index').value;
    let roomType = document.getElementById('room-type').value;
    let date = document.getElementById('date').value;
    let startTime = document.getElementById('start-time').value;
    let endTime = document.getElementById('end-time').value;
    let meetingTitle = document.getElementById('meeting-title').value;
    
    if (rowIndex !== '') {
        updateBooking(rowIndex, roomType, date, startTime, endTime, meetingTitle);
        document.getElementById('row-index').value = '';
        alert('Booking updated successfully!');
    } else {
        let availableRoomsElement = getAvailableRoomsElement(roomType);
        let availableRooms = parseInt(availableRoomsElement.textContent);

        if (availableRooms > 0) {
            availableRooms--;
            availableRoomsElement.textContent = availableRooms;

            addBooking(roomType, date, startTime, endTime, meetingTitle);
            alert('Room booked successfully!');
        } else {
            alert('No rooms available.');
        }
    }

    document.getElementById('booking-form').reset();
});

document.getElementById('booking-table').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        deleteBooking(event.target);
    } else if (event.target.classList.contains('edit-btn')) {
        editBooking(event.target);
    }
});

function getAvailableRoomsElement(roomType) {
    switch(roomType) {
        case 'conference':
            return document.getElementById('conference-rooms');
        case 'meeting':
            return document.getElementById('meeting-rooms');
        case 'board':
            return document.getElementById('board-rooms');
    }
}

function addBooking(roomType, date, startTime, endTime, meetingTitle) {
    let bookingTable = document.getElementById('booking-table').getElementsByTagName('tbody')[0];
    let newRow = bookingTable.insertRow();

    newRow.insertCell(0).textContent = roomType.charAt(0).toUpperCase() + roomType.slice(1) + ' Room';
    newRow.insertCell(1).textContent = date;
    newRow.insertCell(2).textContent = meetingTitle;
    newRow.insertCell(3).textContent = startTime;
    newRow.insertCell(4).textContent = endTime;
    newRow.insertCell(5).innerHTML = '<button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>';
}

function deleteBooking(button) {
    let row = button.closest('tr');
    let roomType = row.cells[0].textContent.split(' ')[0].toLowerCase();
    let availableRoomsElement = getAvailableRoomsElement(roomType);
    let availableRooms = parseInt(availableRoomsElement.textContent);

    availableRooms++;
    availableRoomsElement.textContent = availableRooms;

    row.remove();
    alert('Booking deleted successfully!');
}

function editBooking(button) {
    let row = button.closest('tr');
    let rowIndex = row.rowIndex - 1;
    let roomType = row.cells[0].textContent.split(' ')[0].toLowerCase();
    let date = row.cells[1].textContent;
    let meetingTitle = row.cells[2].textContent;
    let startTime = row.cells[3].textContent;
    let endTime = row.cells[4].textContent;

    document.getElementById('room-type').value = roomType;
    document.getElementById('date').value = date;
    document.getElementById('meeting-title').value = meetingTitle;
    document.getElementById('start-time').value = startTime;
    document.getElementById('end-time').value = endTime;
    document.getElementById('row-index').value = rowIndex;
}

function updateBooking(rowIndex, roomType, date, startTime, endTime, meetingTitle) {
    let bookingTable = document.getElementById('booking-table').getElementsByTagName('tbody')[0];
    let row = bookingTable.rows[rowIndex];

    let previousRoomType = row.cells[0].textContent.split(' ')[0].toLowerCase();
    if (previousRoomType !== roomType) {
        let previousAvailableRoomsElement = getAvailableRoomsElement(previousRoomType);
        let previousAvailableRooms = parseInt(previousAvailableRoomsElement.textContent);
        previousAvailableRooms++;
        previousAvailableRoomsElement.textContent = previousAvailableRooms;

        let newAvailableRoomsElement = getAvailableRoomsElement(roomType);
        let newAvailableRooms = parseInt(newAvailableRoomsElement.textContent);
        newAvailableRooms--;
        newAvailableRoomsElement.textContent = newAvailableRooms;
    }

    row.cells[0].textContent = roomType.charAt(0).toUpperCase() + roomType.slice(1) + ' Room';
    row.cells[1].textContent = date;
    row.cells[2].textContent = meetingTitle;
    row.cells[3].textContent = startTime;
    row.cells[4].textContent = endTime;
}


// ###################################################################################

// document.addEventListener('DOMContentLoaded', function() {
//     loadBookingsFromLocalStorage();
// });

// document.getElementById('booking-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     let rowIndex = document.getElementById('row-index').value;
//     let roomType = document.getElementById('room-type').value;
//     let date = document.getElementById('date').value;
//     let startTime = document.getElementById('start-time').value;
//     let endTime = document.getElementById('end-time').value;
//     let meetingTitle = document.getElementById('meeting-title').value;
    
//     if (rowIndex !== '') {
//         updateBooking(rowIndex, roomType, date, startTime, endTime, meetingTitle);
//         document.getElementById('row-index').value = '';
//         alert('Booking updated successfully!');
//     } else {
//         let availableRoomsElement = getAvailableRoomsElement(roomType);
//         let availableRooms = parseInt(availableRoomsElement.textContent);

//         if (availableRooms > 0) {
//             availableRooms--;
//             availableRoomsElement.textContent = availableRooms;

//             addBooking(roomType, date, startTime, endTime, meetingTitle);
//             alert('Room booked successfully!');
//         } else {
//             alert('No rooms available.');
//         }
//     }

//     document.getElementById('booking-form').reset();
// });

// document.getElementById('booking-table').addEventListener('click', function(event) {
//     if (event.target.classList.contains('delete-btn')) {
//         deleteBooking(event.target);
//     } else if (event.target.classList.contains('edit-btn')) {
//         editBooking(event.target);
//     }
// });

// function getAvailableRoomsElement(roomType) {
//     switch(roomType) {
//         case 'conference':
//             return document.getElementById('conference-rooms');
//         case 'meeting':
//             return document.getElementById('meeting-rooms');
//         case 'board':
//             return document.getElementById('board-rooms');
//     }
// }

// function addBooking(roomType, date, startTime, endTime, meetingTitle) {
//     let bookingTable = document.getElementById('booking-table').getElementsByTagName('tbody')[0];
//     let newRow = bookingTable.insertRow();

//     newRow.insertCell(0).textContent = roomType.charAt(0).toUpperCase() + roomType.slice(1) + ' Room';
//     newRow.insertCell(1).textContent = date;
//     newRow.insertCell(2).textContent = meetingTitle;
//     newRow.insertCell(3).textContent = startTime;
//     newRow.insertCell(4).textContent = endTime;
//     newRow.insertCell(5).innerHTML = '<button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>';

//     saveBookingToLocalStorage();
// }

// function deleteBooking(button) {
//     let row = button.closest('tr');
//     let roomType = row.cells[0].textContent.split(' ')[0].toLowerCase();
//     let availableRoomsElement = getAvailableRoomsElement(roomType);
//     let availableRooms = parseInt(availableRoomsElement.textContent);

//     availableRooms++;
//     availableRoomsElement.textContent = availableRooms;

//     row.remove();
//     saveBookingToLocalStorage();
//     alert('Booking deleted successfully!');
// }

// function editBooking(button) {
//     let row = button.closest('tr');
//     let rowIndex = row.rowIndex - 1;
//     let roomType = row.cells[0].textContent.split(' ')[0].toLowerCase();
//     let date = row.cells[1].textContent;
//     let meetingTitle = row.cells[2].textContent;
//     let startTime = row.cells[3].textContent;
//     let endTime = row.cells[4].textContent;

//     document.getElementById('room-type').value = roomType;
//     document.getElementById('date').value = date;
//     document.getElementById('meeting-title').value = meetingTitle;
//     document.getElementById('start-time').value = startTime;
//     document.getElementById('end-time').value = endTime;
//     document.getElementById('row-index').value = rowIndex;
// }

// function updateBooking(rowIndex, roomType, date, startTime, endTime, meetingTitle) {
//     let bookingTable = document.getElementById('booking-table').getElementsByTagName('tbody')[0];
//     let row = bookingTable.rows[rowIndex];

//     let previousRoomType = row.cells[0].textContent.split(' ')[0].toLowerCase();
//     if (previousRoomType !== roomType) {
//         let previousAvailableRoomsElement = getAvailableRoomsElement(previousRoomType);
//         let previousAvailableRooms = parseInt(previousAvailableRoomsElement.textContent);
//         previousAvailableRooms++;
//         previousAvailableRoomsElement.textContent = previousAvailableRooms;

//         let newAvailableRoomsElement = getAvailableRoomsElement(roomType);
//         let newAvailableRooms = parseInt(newAvailableRoomsElement.textContent);
//         newAvailableRooms--;
//         newAvailableRoomsElement.textContent = newAvailableRooms;
//     }

//     row.cells[0].textContent = roomType.charAt(0).toUpperCase() + roomType.slice(1) + ' Room';
//     row.cells[1].textContent = date;
//     row.cells[2].textContent = meetingTitle;
//     row.cells[3].textContent = startTime;
//     row.cells[4].textContent = endTime;

//     saveBookingToLocalStorage();
// }

// function saveBookingToLocalStorage() {
//     let bookingTable = document.getElementById('booking-table').getElementsByTagName('tbody')[0];
//     let bookings = [];
//     for (let row of bookingTable.rows) {
//         let booking = {
//             roomType: row.cells[0].textContent.split(' ')[0].toLowerCase(),
//             date: row.cells[1].textContent,
//             meetingTitle: row.cells[2].textContent,
//             startTime: row.cells[3].textContent,
//             endTime: row.cells[4].textContent
//         };
//         bookings.push(booking);
//     }
//     localStorage.setItem('bookings', JSON.stringify(bookings));
// }

// function loadBookingsFromLocalStorage() {
//     let bookings = JSON.parse(localStorage.getItem('bookings'));
//     if (bookings) {
//         for (let booking of bookings) {
//             let availableRoomsElement = getAvailableRoomsElement(booking.roomType);
//             let availableRooms = parseInt(availableRoomsElement.textContent);

//             if (availableRooms > 0) {
//                 availableRooms--;
//                 availableRoomsElement.textContent = availableRooms;

//                 let bookingTable = document.getElementById('booking-table').getElementsByTagName('tbody')[0];
//                 let newRow = bookingTable.insertRow();

//                 newRow.insertCell(0).textContent = booking.roomType.charAt(0).toUpperCase() + booking.roomType.slice(1) + ' Room';
//                 newRow.insertCell(1).textContent = booking.date;
//                 newRow.insertCell(2).textContent = booking.meetingTitle;
//                 newRow.insertCell(3).textContent = booking.startTime;
//                 newRow.insertCell(4).textContent = booking.endTime;
//                 newRow.insertCell(5).innerHTML = '<button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>';
//             }
//         }
//     }
// }

