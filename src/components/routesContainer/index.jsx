import React from 'react'

const RoutesContainer = ({ location }) => {
    const isEnteringFromRight = location.state?.direction === 'right';

    return (
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: isEnteringFromRight ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isEnteringFromRight ? -100 : 100 }}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </motion.div>
    );
}

export default RoutesContainer