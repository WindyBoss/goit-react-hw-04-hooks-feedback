import { ButtonGroup, Button } from '@mui/material';

export default function Statistics ({
  state,
  onLeaveFeedback,
}) {

  return (
      <>
        <ButtonGroup size="large" aria-label="large button group">
          {Object.keys(state).map(opt => <Button key={opt} value={opt} variant="contained" color="primary" onClick={onLeaveFeedback}>{opt}</Button>)}
         </ButtonGroup>
      </>
  );
}