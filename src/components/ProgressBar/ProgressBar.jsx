import './ProgressBar.scss';

const progress = 30;

function ProgressBar() {
  return (
    <div className="progressBar">
      <div className="progressBar__line" style={{minWidth: progress + 'vw'}}></div>
    </div>
  );
}

export default ProgressBar;
