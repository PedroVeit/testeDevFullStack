export default function InputPadrao({ label, type = 'text', ...props }) {
    return (
        <div className="mb-4">
            <label className="block text-white text-xs font-bold mb-1 uppercase tracking-wide">
                {label}
            </label>
            <input
                {...props}
                type={type}
                className="w-full px-4 py-2 bg-transparent border-2 border-white/50 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-0 transition-all"
            />
        </div>
    );
}