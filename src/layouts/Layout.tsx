import React from 'react';
import { styled, Container, Box } from '@mui/material';
import Sidebar from './nav/Sidebar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);

  return (
    <MainWrapper>
      <PageWrapper>
        <Sidebar
          // isSidebardir={customizer.activeDir === 'ltr' ? 'left' : 'right'}
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        <Container
          maxWidth={false}
          sx={{
            paddingTop: '20px'
          }}>
          <Box sx={{ minHeight: 'calc(95vh - 120px)' }}>{children}</Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default Layout;

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  width: '100%'
}));

const PageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default
}));
