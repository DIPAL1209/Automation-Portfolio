// @ts-ignore
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
    title: 'Dipal Patel — Full-Stack Developer',
    description: 'Full-Stack Developer building blazing-fast, scalable web experiences with the MERN stack and Next.js. Based in Ahmedabad, India.',
    keywords: ['Full-Stack Developer', 'MERN', 'Next.js', 'React', 'Node.js', 'MongoDB', 'Ahmedabad'],
    authors: [{ name: 'Dipal Patel' }],
    openGraph: {
        title: 'Dipal Patel — Full-Stack Developer',
        description: 'Full-Stack Developer building the web with the MERN stack and Next.js.',
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
        <head>
            <script dangerouslySetInnerHTML={{
                __html: 'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);',
            }} />
        </head>
        <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}