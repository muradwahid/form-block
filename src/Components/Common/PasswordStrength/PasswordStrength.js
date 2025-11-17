import { usePassStrengthMeter } from "../../hooks/usePassStrengthMeter";

const PasswordStrength = ({ type, value }) => {
    usePassStrengthMeter(value, "passLength");

    return type === "password" && value && <div className="passLength">
        <div className="rgfr-strengthMeter"></div>
        <div className="rgfr-strengthMeter"></div>
        <div className="rgfr-strengthMeter"></div>
        <div className="rgfr-strengthMeter"></div>
    </div>
};
export default PasswordStrength;
