import profile from '../../../dataset/profile.js';
import Icon from '../Icon/Icon.jsx';

const Profile = () => {
    const { name, photo, medias } = profile

    return (
        <div class="flex flex-col items-center">
            <img 
                src={photo} 
                alt={name}
                class="
                    w-60
                    cursor-pointer
                    md:mt-[10rem]
                    rounded-full
                "
            />
            <div class="mt-6 flex gap-5">
                {medias.map(media => (
                    <Icon
                        name={media.icon}
                        size="2rem"
                        link={media.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Profile;