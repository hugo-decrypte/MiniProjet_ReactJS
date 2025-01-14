import React, {useEffect, useState} from 'react';
import '../CSS/Profile.css'

function Profile() {
    // État pour le nom et l'URL de la photo
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState(null);
    const [preview, setPreview] = useState(null);

    // Gérer le changement du nom
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // Gérer l'upload de la photo
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile">
            <h1>Profil Utilisateur</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Entrez votre nom"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="photo">Photo de Profil :</label>
                    <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />
                </div>
            </form>

            <h3>Résumé du profil :</h3>
            <p><strong>Nom : </strong>{name}</p>
            {photo && <p><strong>Photo de profil : </strong> <center><img src={preview} alt="Profil" className="profile-pic" /></center></p>}
        </div>
    );
}

export default Profile;

