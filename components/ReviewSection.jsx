import React from 'react'

export const ReviewSection = () => {
  return (
    <div className='mt-10 px-10 md:px-20'>
        
        <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">I can't recommend Parcel4U enough.</h3>
                    <p class="my-4">"The platform is straightforward to use, and the savings are substantial."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Lew Chin Wong</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Online Shopper</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Highly recommended!</h3>
                    <p class="my-4">"Parcel4U helped me save over 50% on my shipping costs, and the process was incredibly easy."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Aminah Rashid</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">SME Owner</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing fast and accurate!</h3>
                    <p class="my-4">"The platform is straightforward to use, and the savings are substantial"</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Jese Leos</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Expats from Singapore</div>
                    </div>
                </figcaption>    
            </figure>
          
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-br-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Definitely a game-changer.</h3>
                    <p class="my-4">"We've been able to cut down on expenses and optimize our shipping strategy thanks to their service."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Abdullah Mustafa</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Operation Manager at NasiLemak4U</div>
                    </div>
                </figcaption>    
            </figure>
        </div>

    </div>
  )
}
