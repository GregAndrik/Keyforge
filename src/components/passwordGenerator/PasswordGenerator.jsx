import { useState, useCallback } from 'react';
import './passwordGenerator.css'

const PasswordGenerator = () => {
  const generatePassword = (length, options) => {
    const charSets = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      symbols: "!@#$%^&?",
      special: "{}[]()+-*/=\\'\"`~,;:._<>",
    };
  
    // Ambiguous characters are defined here
    const ambiguousChars = "li1oO0";
  
    let charSet = '';
    if (options.includeLowercase) charSet += charSets.lowercase;
    if (options.includeUppercase) charSet += charSets.uppercase;
    if (options.includeNumbers) charSet += charSets.numbers;
    if (options.includeSymbols) charSet += charSets.symbols;
    if (options.includeSpecial) charSet += charSets.special;
  
    // Split the charSet string into an array of characters, then filter out characters that are present in the ambiguousChars string using the filter method
    if (options.excludeAmbiguous) {
      charSet = charSet.split('').filter(char => !ambiguousChars.includes(char)).join('');
    }
  
    // joins the filtered characters back into password
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet.charAt(randomIndex);
    }
    return password;
  };
  
  const CheckboxOption = ({ label, checked, onChange }) => (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );

  // Default options on app launch
  const [passwordLength, setPasswordLength] = useState(12);
  const [options, setOptions] = useState({
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
    includeSpecial: false,
    excludeAmbiguous: false
  });
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGenerateClick = useCallback(() => {
    const newPassword = generatePassword(passwordLength, options);
    setGeneratedPassword(newPassword);
  }, [passwordLength, options]);

  const handleCopyClick = () => {
    if (generatedPassword) {
      navigator.clipboard.writeText(generatedPassword)
        .then(() => {
          console.log('Password copied to clipboard');
        })
        .catch(error => {
          console.error('Error copying password to clipboard:', error);
        });
    }
  };

  // When the user changes the default options
  const handleCheckboxChange = (optionName) => {
    setOptions({ ...options, [optionName]: !options[optionName] });
  };
  
  const tickLabels = [
    { name: 'includeLowercase', label: ' ( a-z )' },
    { name: 'includeUppercase', label: ' ( A-Z )' },
    { name: 'includeNumbers', label: ' ( 0-9 )' },
    { name: 'includeSymbols', label: ' ( !@#$%^&? )' },
    { name: 'includeSpecial', label: ' ( e.g. +-*/= )' },
    { name: 'excludeAmbiguous', label: ' ( li1oO0 )' },
  ];

  const optionLabels = [
    { name: 'includeLowercase', label: 'Lowercase:' },
    { name: 'includeUppercase', label: 'Uppercase:' },
    { name: 'includeNumbers', label: 'Numbers:' },
    { name: 'includeSymbols', label: 'Symbols:' },
    { name: 'includeSpecial', label: 'Special:' },
    { name: 'excludeAmbiguous', label: 'Excl. Ambiguous:' }
  ];
  
  return (
    <div className='container generator-container'>
      <div className='length-input'>
        <label>Password Length: </label>
        <span className='length-display'>{passwordLength}</span>
        <input
          type="range"
          min="6"
          max="256"
          value={passwordLength}
          onInput={(e) => setPasswordLength(parseInt(e.target.value, 10))}
        />
      </div>

      <div className='column'>
        <div className='password-options'>
          <div className='optionLabels'>
            {optionLabels.map(option => (
              <label key={option.name}>{option.label}</label>
            ))}
          </div>
        </div>
      </div>

      <div className='column'>
        <div className='password-options'>   
          <div className='tickLabels'>
            {tickLabels.map(option => (
              <CheckboxOption
                key={option.name}
                label={option.label}
                checked={options[option.name]}
                onChange={() => handleCheckboxChange(option.name)}
              />
            ))}
          </div>
        </div>
      </div>

      {generatedPassword && (
        <div className='generated-password'>
          <short>Generated Password:</short>
          <textarea className='password-textarea' value={generatedPassword} readOnly/>
        </div>
      )}

      <div className='button-container'>
        {!generatedPassword && (
          <button className='primary-button' onClick={handleGenerateClick}>Generate Password</button>
        )}
        {generatedPassword && (
          <>
            <button className='primary-button' onClick={handleGenerateClick}>Generate Again</button>
            <button className='primary-button' onClick={handleCopyClick} disabled={!generatedPassword}>Copy Password</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;