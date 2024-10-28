// Sample notifications data (could be fetched from a server)
const notifications = [
    {
      type: 'info',
      title: 'System Update',
      message: 'The parking system will undergo maintenance on October 25, 2024.',
      time: '10 minutes ago'
    },
    {
      type: 'warning',
      title: 'Reservation Expiring',
      message: 'Your parking reservation will expire in 1 hour.',
      time: '30 minutes ago'
    },
    {
      type: 'error',
      title: 'Payment Overdue',
      message: 'Your payment of $15 is overdue. Please settle the balance to avoid penalties.',
      time: '1 hour ago'
    },
    {
      type: 'info',
      title: 'New Feature Available',
      message: 'You can now reserve parking spots in the East Wing.',
      time: '2 hours ago'
    }
  ];
  
  // Function to create notification elements
  function createNotificationElement(notification) {
    const notificationItem = document.createElement('div');
    notificationItem.classList.add('notification-item', notification.type);
  
    notificationItem.innerHTML = `
      <button class="notification-close">&times;</button>
      <div class="notification-title">${notification.title}</div>
      <div class="notification-message">${notification.message}</div>
      <div class="notification-time">${notification.time}</div>
    `;
  
    // Close button event
    notificationItem.querySelector('.notification-close').addEventListener('click', () => {
      notificationItem.remove();
    });
  
    return notificationItem;
  }
  
  // Function to render notifications
  function renderNotifications(filter = 'all') {
    const notificationsList = document.getElementById('notifications-list');
    notificationsList.innerHTML = ''; // Clear previous notifications
  
    notifications
      .filter(notification => filter === 'all' || notification.type === filter)
      .forEach(notification => {
        const notificationElement = createNotificationElement(notification);
        notificationsList.appendChild(notificationElement);
      });
  }
  
  // Filter notifications by type
  function filterNotifications(filter) {
    renderNotifications(filter);
  }
  
  // Clear all notifications
  function clearAllNotifications() {
    document.getElementById('notifications-list').innerHTML = '';
  }
  
  // Render all notifications on page load
  window.onload = function() {
    renderNotifications();
  };
  