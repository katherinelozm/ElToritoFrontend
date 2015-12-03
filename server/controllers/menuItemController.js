var menuItem = require('../schemas/menuitem');

exports.getMenuItems = {
  handler: function(request, reply){
    var menuItems = menuItem.find({});
    reply(menuItems);
  }
}

exports.createMenuItem = {
  handler: function(request, reply){
    var newMenuItem = new menuItem({
      name: request.payload.name,
      price : request.payload.price,
    });
    newMenuItem.save();
    console.log('menuItem saved');
    return reply('ok');
  }
}
