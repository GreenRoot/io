import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('button text', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('button theme clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
