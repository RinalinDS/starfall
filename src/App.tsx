import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles.ts';
import { usePallete } from './hooks/usePallete.tsx';
import { getCurrentDate } from './utils/getCurrentDate.ts';

export const App = () => {
  const { theme } = usePallete();
  const currentDate = getCurrentDate();
  const [isTextAreaActive, setIsTextareaActive] = useState(false);
  const [text, setText] = useState('');
  const [value, setValue] = useState<dayjs.Dayjs | null>(null);

  // const timestamp = new Date(currentDate).getTime(); // i can use this as ID for day.
  // console.log(
  //   'equal',
  //   dayjs(new Date(currentDate).getTime()).unix() === dayjs(value).unix()
  // );

  const time = dayjs(value).format('MMMM DD, YYYY');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header>
            <CurrentDateContainer>
              <span> Current date: {currentDate} </span>
              {value && <span>Picked date: {time}</span>}
            </CurrentDateContainer>
            <DatePicker
              sx={{ fontSize: '1.4rem' }}
              label="Controlled picker"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </Header>
          <div>
            <div
              onClick={() => {
                setIsTextareaActive(true);
              }}
            >
              {isTextAreaActive
                ? ''
                : text || <span>What was your today's dream about?</span>}

              {isTextAreaActive && (
                <textarea
                  autoFocus
                  value={text}
                  onChange={(e) => setText(e.currentTarget.value)}
                />
              )}
            </div>
            <button onClick={() => setIsTextareaActive(false)}>Done</button>
          </div>
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 4rem;
  background-color: ${({ theme }) => theme.background.primary};
`;

const CurrentDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.4rem;
  /* width: 100%; */
`;
