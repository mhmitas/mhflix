// Button.tsx
export const PrimaryButton = () => {
    return (
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded">
            Primary Button
        </button>
    );
};
// Card.tsx
export const Card = () => {
    return (
        <div className="bg-card text-card-foreground p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Card Title</h2>
            <p>This is a card description.</p>
        </div>
    );
};
// Popover.tsx
export const Popover = () => {
    return (
        <div className="bg-popover text-popover-foreground p-4 rounded shadow">
            <p>This is a popover content.</p>
        </div>
    );
};
// Alert.tsx
export const Alert = () => {
    return (
        <div className="bg-destructive text-destructive-foreground p-4 rounded">
            <p>This is a destructive alert.</p>
        </div>
    );
};
// Input.tsx
export const Input = () => {
    return (
        <input
            type="text"
            className="bg-input border border-border text-foreground px-3 py-2 rounded"
            placeholder="Type here..."
        />
    );
};
// SecondaryButton.tsx
export const SecondaryButton = () => {
    return (
        <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded">
            Secondary Button
        </button>
    );
};

// AccentButton.tsx
export const AccentButton = () => {
    return (
        <button className="bg-accent text-accent-foreground px-4 py-2 rounded">
            Accent Button
        </button>
    );
};
// MutedText.tsx
export const MutedText = () => {
    return (
        <p className="text-muted-foreground">
            This is some muted text.
        </p>
    );
};
