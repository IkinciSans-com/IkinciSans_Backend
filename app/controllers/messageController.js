const Message = require('./message');

//mesaj olusturmak icin fonksiyon
function createNewMessage(mesajID, gonderen, alici, icerik) {
  const newMessage = new Message({
    mesajID,
    gonderen,
    alici,
    icerik
  });

  newMessage.save((err, savedMessage) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Kaydedilen mesaj: ', savedMessage);
    }
  });
}

//mesajlari listelemek icin fonksiyon
function listAllMessages() {
  Message.find((err, messages) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Mesajlar: ', messages);
    }
  });
}

//mesajın detaylarını goruntulemek icin fonksiyon
function viewMessageById(message_id) {
  Message.findById(message_id, (err, message) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Mesaj: ', message);
    }
  });
}

//mesaji guncellemek icin fonksiyon
function updateMessageById(message_id, newContent) {
  Message.findByIdAndUpdate(message_id, { icerik: newContent }, (err, message) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Güncellenen mesaj: ', message);
    }
  });
}

//mmesaji silmek icin fonksiyon
function deleteMessageById(message_id) {
  Message.findByIdAndDelete(message_id, (err, message) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Silinen mesaj: ', message);
    }
  });
}

