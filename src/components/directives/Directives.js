import './directives.css'

const Directives = () => {
  const directives = [
    " Adjust the password length using the range slider.",
    " Check the options that you want to include or exclude in the password.",
    " Click \"Generate Password\" to create your password.",
    " Use the \"Copy Password\" button to copy the password to the clipboard.",
  ];

  const tips = [
    " Password strength is defined by the interrelation of length and complexity.",
    " Given the current capacity of brute force attacks, passwords should be at least 16 characters long.",
    " Easily guessable information such as birthdays, names, postcodes, house or phone numbers, ID numbers, and social security numbers should be avoided.",
    " Patterns in the form of numbers or coherent text within the password should be avoided as much as possible.",
    " Different passwords should be distinct from one another and not share patterns or similarities.",
    " No matter how strong, reusing the same password across different online services is not advised.",
    " It is a good practice to update passwords regularly for increased security.",
    " Passwords should be checked on credible websites from time to time in case they have been compromised in a data breach.",
    " It is not recommended to write down passwords, or store them in easily accessible physical or digital locations.",
    " It is advisable to avoid storing critical passwords in the cloud. Instead, safely storing passwords on encrypted drives is preferable.",
    " Smart devices typically use lockscreen passwords as an encryption method. Computers and storage drives should also be encrypted separately.",
    " Copying and pasting passwords can store the information in keyboard clipboards, which could become problematic if forgotten.",
    " The use of a password manager to securely store passwords is highly advised.",
    " Browser-embedded password managers are not secure whatsoever and should be avoided at all costs. They are best deactivated altogether.",
    " Browsing the web and using passwords on others' devices could potentially store them in their browser's embedded password manager and expose them to other users of the device.",
    " Logging into critical accounts when connected to public Wi-Fi hotspots, Tor, free VPNs, or web proxies can potentially compromise passwords to hackers.",
    " Unencrypted connections such as HTTP, FTP, Telnet etc are dangerous as they can compromise information. Encrypted connections such as HTTPS, SFTP, FTPS, SMTPS etc are preferable.",
    " Any website lacking an encrypted connection should be treated with suspicion and avoided.",
    " Using two-step authentication whenever possible adds an extra security layer making it exponentially more difficult to be hacked.",
    " It is crucial to avoid using end-of-life operating systems and browsers that no longer receive security updates.",
    " Using multiple email addresses for different purposes is a solid practice with several benefits.",
    " This should go without saying, but passwords are personal and they should never be shared physically, verbally or digitally."
  ];

  return (
    <div className='container directives-container'>
      <h2 className='directives-title'>Usage Directives and Security Tips</h2>
      <div className='directives-tips'>
        <ul>
        <p>In order to generate a new password:</p>
          {directives.map((directive, index) => (
            <li key={index}>{directive}</li>
          ))}
        </ul>

        <ul>
          <p>General security tips:</p>
          {tips.map((tips, index) => (
            <li key={index}>{tips}</li>
          ))}
        </ul>
      </div>
      <div className='button-container scroll'>
        <a href="#top" className='primary-button'>Scroll Up</a>
      </div>
    </div>
  );
};

export default Directives;