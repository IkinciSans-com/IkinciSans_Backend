const User = require('../models/user');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/helpers');

// İlgili kullanıcıyı almak için GET isteği
const getUser = async (req, res) => {
    try {
        // İstekten gelen kullanıcıyı alın
        const email = req.params.email;

        // Kullanıcıyı veritabanından mail adresine göre bulun
        const user = await User.findOne({ email });
    
        // Başarılı yanıt döndürün
        res.status(200).json(user);
    } catch (error) {
        // Hata durumunda hata yanıtı döndürün
        res.status(500).json({ error: error.message });
    }
};

// Yeni bir kullanıcı oluşturmak için POST isteği
const signup = async (req, res) => {
    try {
       const {email, name, surname, password, birthDate, phone, gender} = req.body;
        
        // Password'u hashleyin
        const hashedPassword = await bcrypt.hash(password, 10);

        // Kullanıcı modeli üzerinden yeni bir kullanıcı oluşturun
        const newUser = new User({
                name, surname, gender, birthDate, phone, email, hashedPassword
        });

        // Kullanıcıyı veritabanına kaydedin
        await newUser.save();

        // Başarılı yanıt döndürün
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        // Hata durumunda hata yanıtı döndürün
        res.status(500).json({ error: error.message });
    }
}

// Bir kullanıcıyla giriş yapmak için POST isteği
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kullanıcıyı veritabanından mail adresine göre bulun
        const user = await User.findOne({ email });

        // Kullanıcı bulunamazsa hata yanıtı döndürün
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Kullanıcının şifresini kontrol edin
        const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);

        // Şifre yanlışsa hata yanıtı döndürün
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid creds' });
        }

        // Başarılı yanıt döndürün
        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                surname: user.surname,
                email: user.email,
                role: user.role,
            },
            token: generateToken(user._id),
        });
    } catch (error) {
        // Hata durumunda hata yanıtı döndürün
        res.status(500).json({ error: error.message });
    }
}

// Bir kullanıcıyı güncellemek için PUT isteği
const updateUser = async (req, res) => {
    try {
        // Güncellenmek istenen kullanıcının ID'sini alın
        const email = req.params.email;

        // Güncellenmek istenen kullanıcı bilgilerini alın
        const { name, surname } = req.body;

        // Kullanıcıyı veritabanından bulun
        const user = await User.findOne({ email });

        // Kullanıcı bulunamazsa hata yanıtı döndürün
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Kullanıcıyı güncelleyin
        user.name = name;
        user.surname = surname;
        
        // Kullanıcıyı veritabanına kaydedin
        await user.save();

        // Başarılı yanıt döndürün
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        // Hata durumunda hata yanıtı döndürün
        res.status(500).json({ error: error.message });
    }
}

// Bir kullanıcıyı silmek için DELETE isteği
const deleteUser = async (req, res) => {
    try {
        // İstekten gelen kullanıcıyı alın
        // /api/1.0/users/${email}
        const email = req.params.email;

        // Kullanıcıyı veritabanından bulun
        const user = await User.findOne({ email });

        // Kullanıcıyı veritabanından silin
        await user.remove();

        // Başarılı yanıt döndürün
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        // Hata durumunda hata yanıtı döndürün
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getUser,
    signup,
    login,
    updateUser,
    deleteUser
};
