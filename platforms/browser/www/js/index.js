
  document.addEventListener('deviceready', ondeviceready, false);

  function ondeviceready(){
    alert('Ready');
  }

  function aaa(){
    cordova.plugins.notification.local.schedule({
    id:1,
    title: 'My first notification',
    text: 'Thats pretty easy...'
});
  }
