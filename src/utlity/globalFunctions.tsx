export function generateUniqueId(pageId: number) {  
    return 'id-' + Date.now().toString(36) + '-' + Math.random().toString().slice(2, 9);  
  }  