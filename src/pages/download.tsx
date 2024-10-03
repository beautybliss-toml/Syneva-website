import { DownloadCard } from '../components';
import { LinuxIcon } from '../assets/images';
import MacOSIcon from '../icons/macOS';
import WindowsIcon from '../icons/Windows';

const download = () => {
    const handleDownload = (platform: string) => {
        let downloadUrl = '';

        switch (platform) {
            case 'Windows':
                downloadUrl = 'syneva-windows.exe';
                break;
            case 'Linux':
                downloadUrl = 'syneva-linux.deb';
                break;
            case 'macOS-Intel':
                downloadUrl = 'syneva-macos-intel.dmg';
                break;
            case 'macOS-AppleSilicon':
                downloadUrl = 'syneva-macos-apple.dmg';
                break;
            default:
                return;
        }

        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = downloadUrl.split('/').pop() || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="max-w-screen-sm p-4 mx-auto my-4 md:my-11">
            <h2 className="text-[40px] my-5 font-bold">Download</h2>
            <p className="text-sm opacity-70 text-[#1E2337] max-w-[360px]">
                To start using Syneva, simply click on the button below and download the app to your device.
            </p>
            <div className="grid items-center gap-5 md:grid-cols-2 my-11">
                {/* Windows */}
                <DownloadCard
                    platform="Windows"
                    icon={<WindowsIcon className="fill-[#2D84EC] group-hover:fill-white" size={30} />}
                    description="Requires Windows 10 or higher"
                    onClick={() => handleDownload('Windows')}
                />

                {/* Linux */}
                <DownloadCard
                    platform="Linux"
                    icon={<img src={LinuxIcon} alt="Linux Icon" className="h-[30px] w-[30px]" />}
                    onClick={() => handleDownload('Linux')}
                />

                {/* macOS - Apple Silicon */}
                <DownloadCard
                    platform="macOS"
                    icon={<MacOSIcon className="fill-[#1E2337] group-hover:fill-white" size={30} />}
                    badgeText="Apple Silicon"
                    badgeColor="bg-[#DDEEFF]"
                    onClick={() => handleDownload('macOS-AppleSilicon')}
                />

                {/* macOS - Intel */}
                <DownloadCard
                    platform="macOS"
                    icon={<MacOSIcon className="fill-[#1E2337] group-hover:fill-white" size={30} />}
                    badgeText="Intel"
                    badgeColor="bg-[#DDEEFF]"
                    onClick={() => handleDownload('macOS-Intel')}
                />
            </div>
        </div>
    );
};

export default download;