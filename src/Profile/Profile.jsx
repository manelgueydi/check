import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    image: {
      borderRadius: "50%",
      width: "200px",
      height: "200px",
      objectFit: "cover",
      margin: "20px 0",
    },
    name: {
      fontSize: "32px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    bio: {
      fontSize: "24px",
      margin: "10px 0",
    },
    profession: {
      color: "red",
      fontSize: "24px",
      margin: "10px 0",
    },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      padding: "10px 20px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "10px 0",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <img src={children} alt="Profile" style={styles.image} />
      <h1 style={styles.name}>{fullName}</h1>
      <p style={styles.bio}>{bio}</p>
      <p style={styles.profession}>{profession}</p>
      <button style={styles.button} onClick={() => handleName(fullName)}>
        afficher le nom
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Adila Sedraïa",
  bio: "la crainte fait perdre l'espoire et la timidité fait manquer la sagesse",
  profession: "Auteure compositrice interprète",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
