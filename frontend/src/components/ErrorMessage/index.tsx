type ErrorMessageProps = {
  children: React.ReactNode;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <span className="text-base text-red-500">{children}</span>;
};

export default ErrorMessage;
