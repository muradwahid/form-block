export const logoPosition = (option) => {
    if (option === "left") {
        return "row";
    } else if (option === "top") {
        return "column";
    } else if (option === "bottom") {
        return "column-reverse";
    } else if (option === "right") {
        return "row-reverse";
    }
};

export const inputType = (val) => {
    if (val === "username") {
        return "text";
    } else if (val === "email") {
        return "email";
    } else if (val === "password") {
        return "password";
    } else if (val === "confirmpassword") {
        return "password";
    } else if (val === "website") {
        return "url";
    } else {
        return "text";
    }
};
export const webUrl = window.location.origin;

export const getBoxCss = (value) => {
    return `${value?.top} ${value?.left} ${value?.bottom} ${value?.right}`;
};
export const btnAlign = (value) => {
    if (value === "left") {
        return "start";
    } else if (value === "right") {
        return "end";
    } else if (value === "center") {
        return "center";
    }
};

export const location = window.location.origin + window.location.pathname + "/";

export const generateUserName = (email) => {
    const usernameRegex = /^[^/@_.]+/;
    const usernameMatch = email.match(usernameRegex)[0];
    return usernameMatch;
};

export const headingPosition = (val) => (val === 'column' || val === 'column-reverse') ? true : false;

export const passwordLength = (password) => {
  let strength = 0;
  if (password.length >= 6) {
    strength += 1;
  }
  // if (/[a-z]/.test(password)) {
  //   strength += 1;
  // }
  if (/[A-Z]/.test(password)) {
    strength += 1;
  }
  if (/[0-9]/.test(password)) {
    strength += 1;
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    strength += 1;
  }
  return strength;
}

export function decodeWpEscapedHtml(str) {
    // 1. Decode HTML entities (WordPress escaping)
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    let decoded = textarea.value;

    // 2. Decode backslash escapes
    decoded = decoded
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .replace(/\\\\/g, "\\")
        .replace(/\\\//g, "/")
        .replace(/\\n/g, "\n")
        .replace(/\\r/g, "\r")
        .replace(/\\t/g, "\t");

    return decoded.trim();
}
