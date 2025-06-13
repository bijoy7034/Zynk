import { PropagateLoader, PulseLoader } from "react-spinners";

const Loader = ({ loading = true, color = "white", size = 3 }) => {
  const SimpleSpinner = () => (
    <div 
      style={{
        width: '16px',
        height: '16px',
        border: '2px solid transparent',
        borderTop: `2px solid ${color}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        display: 'inline-block'
      }}
    />
  );

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <PulseLoader cssOverride={{margin: 0, padding: 0 }} loading={loading} color={color} size={size} />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
