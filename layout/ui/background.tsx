import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function Background() {
    return (
        <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
            <AccessibilityNewRounded className="absolute text-gray-300 opacity-20"
                style={{
                fontSize: "300px",
                top: "-40px",
                right: "-40px",
                }}
                />                                    
        </div>
    )
}