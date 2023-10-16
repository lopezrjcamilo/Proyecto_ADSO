const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Valida que los campos no estén vacíos y el password tenga al menos 6 caracteres
function validateForm(username, password) {
// thim() elimina los espacios en blanco al inicio y al final de un string
  if (username.trim() === "") {
    alert("Please enter a username");
    return false;
  }

  if (password.trim() === "") {
    alert("Please enter a password");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  return true;
}

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // prevent the form from submitting

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate username and password
    if (!validateForm(username, password)) {
        return;
    }

    /**
     * TODO: Manejamos el login con async/await y no con then/catch
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     * y si algo falla lo manejamos con un bloque try/catch.
     */

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response) {
            // login successful, do something
            console.log("login successful");
        } else {
            // login failed, do something else
            console.log("login failed");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
