window.addEventListener('load', () => {
  if (window.Addon) {
    Addon.initialize({
      card_buttons: async (context) => {
        const permissions = context.getPermissions();
        if (!permissions.card.update) return [];

        return [{
          text: '✨ Вдохновение',
          callback: async (callbackContext) => {
            window.parent.postMessage({
              type: 'kaiten-plugin-iframe-open',
              url: window.location.origin + '/quotes'
            }, '*');
          }
        }];
      }
    });
  } else {
    console.error("SDK Kaiten не загружен");
  }
});