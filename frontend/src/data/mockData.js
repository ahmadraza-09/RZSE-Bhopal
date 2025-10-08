export const services = [
    {
        id: '1',
        name: 'AC Repair & Service',
        slug: 'ac-repair',
        description: 'Expert AC repair, installation, and maintenance services for all brands.',
        detailed_description: 'Our certified technicians provide comprehensive air conditioning services including repair, installation, gas refilling, maintenance, and deep cleaning. We handle all AC types: window, split, central, and cassette ACs.',
        image_url: 'https://iticollege.edu/wp-content/uploads/2023/09/HVAC-Technicians.jpg?auto=compress&cs=tinysrgb&w=800',
        icon: 'Wind',
        starting_price: 299,
        features: [
            'Gas refilling and leak detection',
            'Complete AC installation',
            'Deep cleaning and sanitization',
            'Compressor repair and replacement',
            'PCB and sensor repair',
            '90-day service warranty'
        ],
        process_steps: [
            { step: 1, title: 'Book Online', description: 'Schedule your service at a convenient time' },
            { step: 2, title: 'Expert Visit', description: 'Certified technician visits your location' },
            { step: 3, title: 'Diagnosis', description: 'Complete inspection and problem diagnosis' },
            { step: 4, title: 'Repair', description: 'Professional repair with genuine parts' },
            { step: 5, title: 'Quality Check', description: 'Testing and performance verification' }
        ],
        faqs: [
            { question: 'How long does AC repair take?', answer: 'Most AC repairs are completed within 1-2 hours depending on the issue complexity.' },
            { question: 'Do you provide warranty?', answer: 'Yes, we provide 90 days warranty on all repairs and spare parts.' },
            { question: 'What brands do you service?', answer: 'We service all major brands including LG, Samsung, Voltas, Daikin, Carrier, and more.' }
        ]
    },
    {
        id: '2',
        name: 'Refrigerator Repair',
        slug: 'fridge-repair',
        description: 'Fast and reliable fridge repair services for cooling issues, leaks, and more.',
        detailed_description: 'Our experienced technicians handle all refrigerator problems including cooling issues, water leakage, compressor problems, thermostat issues, and door seal replacements. We service single door, double door, and side-by-side refrigerators.',
        image_url: 'https://acservice299.com/wp-content/uploads/2025/01/How-to-Find-Reliable-Fridge-Repair-Services-in-Adelaide-2.jpeg?auto=compress&cs=tinysrgb&w=800',
        icon: 'Refrigerator',
        starting_price: 349,
        features: [
            'Cooling system repair',
            'Compressor replacement',
            'Gas charging',
            'Thermostat repair',
            'Door seal replacement',
            '60-day service warranty'
        ],
        process_steps: [
            { step: 1, title: 'Book Service', description: 'Choose your preferred date and time' },
            { step: 2, title: 'Inspection', description: 'Technician inspects your refrigerator' },
            { step: 3, title: 'Diagnosis', description: 'Identify the root cause of the problem' },
            { step: 4, title: 'Repair Work', description: 'Fix the issue with quality parts' },
            { step: 5, title: 'Testing', description: 'Ensure optimal cooling performance' }
        ],
        faqs: [
            { question: 'Why is my fridge not cooling?', answer: 'Common causes include gas leakage, compressor issues, or thermostat problems. Our technician will diagnose the exact cause.' },
            { question: 'How much does fridge repair cost?', answer: 'Costs vary based on the issue. Inspection is free, and we provide a quote before starting any work.' },
            { question: 'Do you repair all fridge brands?', answer: 'Yes, we repair all brands including Whirlpool, Samsung, LG, Godrej, Haier, and more.' }
        ]
    },
    {
        id: '3',
        name: 'Washing Machine Repair',
        slug: 'washing-machine-repair',
        description: 'Complete washing machine repair for front load, top load, and automatic models.',
        detailed_description: 'We provide expert washing machine repair services for all types including front load, top load, semi-automatic, and fully automatic machines. Our services cover motor repair, drum issues, drainage problems, and electronic board repairs.',
        image_url: 'https://www.washingmachineservicecenters.in/images/washing-machine-service-tirupur.jpg?auto=compress&cs=tinysrgb&w=800',
        icon: 'Shirt',
        starting_price: 279,
        features: [
            'Motor and belt replacement',
            'Drum and bearing repair',
            'Water inlet valve repair',
            'PCB and timer repair',
            'Drainage pump repair',
            '60-day warranty'
        ],
        process_steps: [
            { step: 1, title: 'Schedule', description: 'Book service through our website' },
            { step: 2, title: 'Assessment', description: 'Technician evaluates the issue' },
            { step: 3, title: 'Quote', description: 'Transparent pricing before repair' },
            { step: 4, title: 'Fix', description: 'Professional repair service' },
            { step: 5, title: 'Test Run', description: 'Complete wash cycle testing' }
        ],
        faqs: [
            { question: 'Why is my washing machine making noise?', answer: 'Noise can be caused by worn bearings, loose drum, or foreign objects. We will diagnose and fix it.' },
            { question: 'How long does repair take?', answer: 'Most repairs are completed in 1-2 hours on the same day.' },
            { question: 'Do you repair both automatic and semi-automatic?', answer: 'Yes, we service all types of washing machines from all brands.' }
        ]
    },
    {
        id: '4',
        name: 'Microwave Repair',
        slug: 'microwave-repair',
        description: 'Professional microwave repair for heating issues, turntable, and electronic problems.',
        detailed_description: 'Our skilled technicians repair all microwave problems including no heating, turntable not rotating, sparking issues, door problems, and control panel malfunctions. We service solo, grill, and convection microwaves.',
        image_url: 'https://www.revampservice.com/web-assets/images/microvawe.jpg?auto=compress&cs=tinysrgb&w=800',
        icon: 'Microwave',
        starting_price: 249,
        features: [
            'Magnetron replacement',
            'Door switch repair',
            'Turntable motor repair',
            'Control panel repair',
            'Cavity cleaning',
            '45-day warranty'
        ],
        process_steps: [
            { step: 1, title: 'Book Now', description: 'Easy online booking system' },
            { step: 2, title: 'Visit', description: 'Technician arrives at your doorstep' },
            { step: 3, title: 'Check', description: 'Thorough inspection of components' },
            { step: 4, title: 'Repair', description: 'Fix or replace faulty parts' },
            { step: 5, title: 'Verify', description: 'Test heating and all functions' }
        ],
        faqs: [
            { question: 'Why is my microwave not heating?', answer: 'The magnetron or high voltage diode may be faulty. Our technician will diagnose and repair it.' },
            { question: 'Is microwave repair safe?', answer: 'Yes, our certified technicians follow all safety protocols and use proper equipment.' },
            { question: 'Can you repair convection microwaves?', answer: 'Yes, we repair all types including solo, grill, and convection microwaves.' }
        ]
    },
    {
        id: '5',
        name: 'Air Cooler Repair',
        slug: 'cooler-repair',
        description: 'Air cooler repair and maintenance for all types of desert and personal coolers.',
        detailed_description: 'We provide complete air cooler repair services including motor repair, pump replacement, cooling pad replacement, water tank repair, and general maintenance. We service all types of air coolers.',
        image_url: 'https://www.serviceonwheel.com/uploads/service/693711584075466.jpg?auto=compress&cs=tinysrgb&w=800',
        icon: 'Fan',
        starting_price: 199,
        features: [
            'Motor repair and replacement',
            'Water pump repair',
            'Cooling pad replacement',
            'Tank leak repair',
            'Fan blade balancing',
            '30-day warranty'
        ],
        process_steps: [
            { step: 1, title: 'Book Service', description: 'Select your preferred slot' },
            { step: 2, title: 'Inspection', description: 'Technician checks the cooler' },
            { step: 3, title: 'Cleaning', description: 'Deep cleaning of tank and pads' },
            { step: 4, title: 'Repair', description: 'Fix motors, pumps, or leaks' },
            { step: 5, title: 'Testing', description: 'Ensure proper cooling' }
        ],
        faqs: [
            { question: 'How often should I service my cooler?', answer: 'We recommend servicing before and after summer season for optimal performance.' },
            { question: 'Do you replace cooling pads?', answer: 'Yes, we provide and install high-quality cooling pads.' },
            { question: 'Can you fix water leakage?', answer: 'Yes, we repair water tank leaks and overflow issues.' }
        ]
    },
    {
        id: '6',
        name: 'TV Repair',
        slug: 'tv-repair',
        description: 'Expert TV repair for LED, LCD, Smart TVs with screen and sound issues.',
        detailed_description: 'Our experienced technicians repair all TV problems including no display, lines on screen, no sound, connectivity issues, and smart TV software problems. We service all brands and sizes of LED, LCD, OLED, and Smart TVs.',
        image_url: 'https://repairguru.in/wp-content/uploads/2022/06/3940852.jpeg?auto=compress&cs=tinysrgb&w=800',
        icon: 'Tv',
        starting_price: 399,
        features: [
            'Screen panel repair',
            'Backlight replacement',
            'Sound system repair',
            'Power board repair',
            'Software updates',
            '60-day warranty'
        ],
        process_steps: [
            { step: 1, title: 'Request Service', description: 'Book online or call us' },
            { step: 2, title: 'Diagnosis', description: 'Expert checks all components' },
            { step: 3, title: 'Estimate', description: 'Clear pricing with no hidden costs' },
            { step: 4, title: 'Fix', description: 'Repair with original parts' },
            { step: 5, title: 'Demo', description: 'Full demonstration after repair' }
        ],
        faqs: [
            { question: 'Can you repair cracked TV screens?', answer: 'Screen replacement is possible but costly. We assess and provide the best recommendation.' },
            { question: 'Do you repair Smart TV software issues?', answer: 'Yes, we handle firmware updates, app issues, and connectivity problems.' },
            { question: 'What TV brands do you service?', answer: 'We service all brands including Samsung, LG, Sony, Mi, OnePlus, and more.' }
        ]
    },
    {
        id: '7',
        name: 'Geyser Repair',
        slug: 'geyser-repair',
        description: 'Expert geyser repair and installation services for instant and storage water heaters.',
        detailed_description: 'Our certified technicians repair all types of geysers including electric, gas, and instant water heaters. We handle no hot water, leakage, thermostat issues, and installation services for all brands.',
        image_url: 'https://nicholson-hvac.com/wp-content/uploads/2022/10/Boiler-System-Technician-Repair-Replacement-Image.jpg',
        icon: 'Zap',
        starting_price: 499,
        features: [
            'Leakage repair',
            'Thermostat replacement',
            'Heating element repair',
            'Gas burner repair',
            'Installation & maintenance',
            '60-day warranty'
        ],
        process_steps: [
            { step: 1, title: 'Request Service', description: 'Book online or call us' },
            { step: 2, title: 'Diagnosis', description: 'Technician inspects the geyser' },
            { step: 3, title: 'Estimate', description: 'Transparent pricing with no hidden charges' },
            { step: 4, title: 'Fix', description: 'Repair using genuine parts' },
            { step: 5, title: 'Demo', description: 'Testing and demonstration after repair' }
        ],
        faqs: [
            { question: 'Do you repair instant water heaters?', answer: 'Yes, we repair both instant and storage geysers.' },
            { question: 'Do you provide installation service?', answer: 'Yes, we install new geysers at your location.' },
            { question: 'Which brands do you service?', answer: 'We service Havells, Racold, Bajaj, AO Smith, Crompton, and all major brands.' }
        ]
    },
    {
        id: '8',
        name: 'Kitchen Chimney Service',
        slug: 'kitchen-chimney-service',
        description: 'Professional kitchen chimney cleaning, installation, and repair services.',
        detailed_description: 'We clean and repair all types of kitchen chimneys including wall-mounted, island, and built-in models. Services include motor repair, filter cleaning, smoke suction issues, and new installations.',
        image_url: 'https://www.jagranimages.com/images/newimg/17042024/17_04_2024-kitchen_1200_23699138.webp',
        icon: 'AirVent',
        starting_price: 399,
        features: [
            'Motor repair',
            'Filter replacement',
            'Smoke suction improvement',
            'Installation & maintenance',
            'Cleaning & degreasing',
            '60-day warranty'
        ],
        process_steps: [
            { step: 1, title: 'Request Service', description: 'Book online or call us' },
            { step: 2, title: 'Inspection', description: 'Technician checks motor and filters' },
            { step: 3, title: 'Estimate', description: 'Transparent pricing with no hidden charges' },
            { step: 4, title: 'Repair / Clean', description: 'Service performed using genuine parts' },
            { step: 5, title: 'Demo', description: 'Testing and demonstration after service' }
        ],
        faqs: [
            { question: 'Do you clean grease filters?', answer: 'Yes, we thoroughly clean and degrease all filters.' },
            { question: 'Do you repair chimney motors?', answer: 'Yes, we repair or replace faulty motors.' },
            { question: 'Which brands do you service?', answer: 'We service Faber, Elica, Glen, Hindware, and all major chimney brands.' }
        ]
    },
    {
        id: '9',
        name: 'RO Water Purifier Service',
        slug: 'ro-water-purifier-service',
        description: 'Expert RO water purifier installation, repair, and maintenance services.',
        detailed_description: 'We repair and maintain all RO water purifiers. Services include membrane replacement, filter cleaning, leakage fixing, low water pressure issues, and new installations for brands like Kent, Aquaguard, Livpure, and Eureka Forbes.',
        image_url: 'https://uvwater.biz/wp-content/uploads/2019/11/Filter-Service-AMC-min.jpg',
        icon: 'Droplet',
        starting_price: 299,
        features: [
            'Filter replacement',
            'RO membrane repair',
            'Leakage fixing',
            'Installation & maintenance',
            'Water quality check',
            '60-day warranty'
        ],
        process_steps: [
            { step: 1, title: 'Request Service', description: 'Book online or call us' },
            { step: 2, title: 'Inspection', description: 'Technician checks purifier and water flow' },
            { step: 3, title: 'Estimate', description: 'Transparent pricing with no hidden charges' },
            { step: 4, title: 'Fix / Replace', description: 'Repair or replace faulty parts' },
            { step: 5, title: 'Demo', description: 'Ensure purified water is clean and safe' }
        ],
        faqs: [
            { question: 'Do you replace RO membranes?', answer: 'Yes, we replace membranes and all filters.' },
            { question: 'Do you provide installation service?', answer: 'Yes, new RO purifiers are installed at home.' },
            { question: 'Which brands do you service?', answer: 'We service Kent, Aquaguard, Livpure, Eureka Forbes, and all major brands.' }
        ]
    },
    {
        id: '10',
        name: 'Plumber Services',
        slug: 'plumber-services',
        description: 'Professional plumbing services for homes in Hadapsar, Pune. Leakage repair, pipe replacement, and more.',
        detailed_description: 'We provide expert plumbing solutions including leak repairs, pipe replacements, bathroom & kitchen fittings, water pump installation, and drainage unclogging. Our licensed plumbers ensure reliable and timely service.',
        image_url: 'https://rapidrepairs247.com/wp-content/uploads/2024/04/Toilet-Repair-1.jpeg',
        icon: 'HardHat',
        starting_price: 399,
        features: [
            'Leak detection & repair',
            'Pipe replacement',
            'Faucet & tap repair',
            'Drain cleaning',
            'Water pump installation',
            '60-day warranty'
        ],
        process_steps: [
            { step: 1, title: 'Request Service', description: 'Book online or call us' },
            { step: 2, title: 'Inspection', description: 'Plumber inspects the issue' },
            { step: 3, title: 'Estimate', description: 'Transparent pricing with no hidden charges' },
            { step: 4, title: 'Repair', description: 'Fix using genuine parts and tools' },
            { step: 5, title: 'Demo', description: 'Check for leaks and proper functioning' }
        ],
        faqs: [
            { question: 'Do you fix leaking taps?', answer: 'Yes, all types of tap and faucet leaks are repaired.' },
            { question: 'Do you replace old pipes?', answer: 'Yes, we replace old or damaged plumbing pipes.' },
            { question: 'Do you provide emergency plumbing service?', answer: 'Yes, emergency plumbing support is available in Hadapsar, Pune.' }
        ]
    },





];

export const testimonials = [
    {
        id: '1',
        customer_name: 'Rajesh Kumar',
        customer_image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
        service_name: 'AC Repair',
        rating: 5,
        review_text: 'Excellent service! The technician was professional, diagnosed the problem quickly, and fixed my AC in less than an hour. Highly recommended!',
        location: 'Mumbai',
        is_featured: true
    },
    {
        id: '2',
        customer_name: 'Priya Sharma',
        customer_image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
        service_name: 'Washing Machine Repair',
        rating: 5,
        review_text: 'Very satisfied with the service. They arrived on time, fixed the drainage issue, and the machine is working perfectly now. Great job!',
        location: 'Delhi',
        is_featured: true
    },
    {
        id: '3',
        customer_name: 'Amit Patel',
        customer_image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
        service_name: 'Refrigerator Repair',
        rating: 5,
        review_text: 'My fridge stopped cooling completely. The technician fixed it same day with genuine parts. Very professional service and reasonable pricing.',
        location: 'Bangalore',
        is_featured: true
    },
    {
        id: '4',
        customer_name: 'Sneha Reddy',
        customer_image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
        service_name: 'Microwave Repair',
        rating: 4,
        review_text: 'Good service. Fixed the heating issue in my microwave. The technician was knowledgeable and explained everything clearly.',
        location: 'Hyderabad',
        is_featured: true
    },
    {
        id: '5',
        customer_name: 'Vikram Singh',
        customer_image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
        service_name: 'TV Repair',
        rating: 5,
        review_text: 'Amazing service! They fixed my LED TV display issue perfectly. The warranty they provide gives me peace of mind. Thank you!',
        location: 'Pune',
        is_featured: true
    },
    {
        id: '6',
        customer_name: 'Deepa Nair',
        customer_image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
        service_name: 'AC Service',
        rating: 5,
        review_text: 'Booked online easily, technician came on time, and did a thorough AC service. My AC is cooling much better now!',
        location: 'Chennai',
        is_featured: true
    }
];

export const blogPosts = [
    {
        id: '1',
        title: '10 Tips to Reduce Your AC Electricity Bill This Summer',
        slug: '10-tips-reduce-ac-electricity-bill',
        excerpt: 'Learn practical ways to save energy and reduce your AC running costs while staying cool.',
        content: `Summer is here and so are the high electricity bills from running your air conditioner all day. But don't worry! Here are 10 proven tips to help you reduce your AC electricity consumption without compromising on comfort.

## 1. Set the Right Temperature

Keep your AC at 24-26°C. Every degree lower increases electricity consumption by 6%. This temperature range is comfortable and energy-efficient.

## 2. Regular Maintenance

Clean or replace AC filters every month. Dirty filters block airflow and make your AC work harder, consuming more electricity.

## 3. Use Timer Function

Set your AC to turn off automatically after you fall asleep. You don't need cooling throughout the night.

## 4. Seal Room Properly

Close all doors and windows. Cover gaps around windows and doors to prevent cool air from escaping.

## 5. Use Ceiling Fans

Run ceiling fans along with AC. This helps circulate cool air better, allowing you to set AC at a higher temperature.

## 6. Service Your AC

Get professional AC servicing twice a year. Regular maintenance ensures optimal performance and lower electricity consumption.

## 7. Block Sunlight

Use curtains or blinds during the day to block direct sunlight. This reduces the heat entering your room.

## 8. Avoid Heat Sources

Keep lamps, TVs, and other heat-generating devices away from the AC thermostat. They can trick it into running longer.

## 9. Upgrade to Inverter AC

If your AC is old, consider upgrading to a 5-star inverter AC. They consume 50% less electricity than regular ACs.

## 10. Strategic Room Cooling

Cool only the rooms you're using. Close vents in unused rooms to concentrate cooling where needed.

Follow these tips and watch your electricity bills drop significantly while staying comfortable all summer!`,
        category: 'Energy Saving',
        author_name: 'Arun Kumar',
        author_image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
        featured_image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['AC Tips', 'Energy Saving', 'Summer', 'Cost Saving'],
        read_time: 5,
        published: true
    },
    {
        id: '2',
        title: 'Signs Your Refrigerator Needs Immediate Repair',
        slug: 'signs-refrigerator-needs-repair',
        excerpt: 'Don\'t ignore these warning signs! Learn when to call a professional for fridge repair.',
        content: `Your refrigerator works 24/7 to keep your food fresh. But how do you know when it needs professional attention? Here are the key warning signs you should never ignore.

## 1. Not Cooling Properly

If your fridge isn\'t maintaining proper temperature despite being set correctly, it\'s time to call a technician. Food spoiling faster than usual is a red flag.

## 2. Excessive Frost in Freezer

While some frost is normal, excessive ice buildup indicates a problem with the defrost system or door seal.

## 3. Water Leakage

Puddles of water around your fridge are not normal. This could indicate a clogged drain tube, damaged water line, or faulty door seal.

## 4. Strange Noises

While refrigerators make some noise, loud buzzing, clicking, or rattling sounds indicate mechanical problems that need immediate attention.

## 5. Condensation Outside

Moisture or condensation on the exterior of your fridge means the door seal is faulty or the humidity control is not working properly.

## 6. Food Freezing in Fresh Food Section

If food in the regular compartment is freezing, the thermostat or temperature control board may be malfunctioning.

## 7. High Electricity Bills

A sudden spike in electricity bills could mean your fridge is working harder due to underlying issues.

## 8. Fridge Running Constantly

Your refrigerator should cycle on and off. If it runs continuously, there's likely a problem with the compressor, thermostat, or cooling system.

## 9. Bad Odors

Persistent bad smells even after cleaning could indicate bacteria growth due to poor cooling or moisture problems.

## 10. Old Age

If your refrigerator is over 10-15 years old and showing multiple issues, it might be time for professional assessment.

Don't wait until your fridge completely stops working. Early repair can save you from expensive replacements and prevent food spoilage. Contact our expert technicians for a thorough inspection and repair.`,
        category: 'Maintenance Tips',
        author_name: 'Priya Mehta',
        author_image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
        featured_image: 'https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['Refrigerator', 'Maintenance', 'Warning Signs', 'Repair'],
        read_time: 6,
        published: true
    },
    {
        id: '3',
        title: 'How to Extend Your Washing Machine Lifespan',
        slug: 'extend-washing-machine-lifespan',
        excerpt: 'Simple maintenance tips to make your washing machine last longer and perform better.',
        content: `A washing machine is a significant investment, and with proper care, it can serve you well for many years. Here's how to maximize its lifespan.

## 1. Don't Overload

Follow the manufacturer's load capacity guidelines. Overloading puts excessive strain on the motor, drum, and bearings.

## 2. Use Right Amount of Detergent

Too much detergent creates excessive suds that can damage seals and leave residue. Use the recommended amount for your water hardness level.

## 3. Clean the Filter Regularly

Most washing machines have a lint filter that needs cleaning every month. A clogged filter can cause drainage issues.

## 4. Leave Door Open After Use

After washing, leave the door open for a few hours to allow moisture to evaporate. This prevents mold and odor buildup.

## 5. Clean Detergent Dispenser

Remove and clean the detergent drawer monthly to prevent residue buildup and mold growth.

## 6. Check Pockets

Always check and empty pockets before washing. Coins, keys, and small objects can damage the drum and pump.

## 7. Level Your Machine

Ensure your washing machine is level. An unbalanced machine vibrates excessively, damaging internal components.

## 8. Don't Delay Repairs

Address small issues immediately before they become major problems. Strange noises or minor leaks should not be ignored.

## 9. Use Quality Detergent

Cheap detergents can leave residue and damage rubber parts. Invest in good quality detergent suitable for your machine type.

## 10. Professional Servicing

Get professional maintenance annually. Technicians can detect and fix minor issues before they escalate.

## 11. Clean Rubber Seal

Front-load machines have rubber door seals that trap moisture and dirt. Wipe them clean after every few washes.

## 12. Avoid Harsh Chemicals

Don't use bleach or harsh chemicals unless recommended by the manufacturer. They can damage internal components.

By following these simple tips, you can extend your washing machine's lifespan from 7-8 years to 12-15 years or more!`,
        category: 'Maintenance Tips',
        author_name: 'Rahul Desai',
        author_image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
        featured_image: 'https://images.pexels.com/photos/5591642/pexels-photo-5591642.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['Washing Machine', 'Maintenance', 'Longevity', 'Care Tips'],
        read_time: 7,
        published: true
    },
    {
        id: '4',
        title: 'DIY Microwave Cleaning: A Step-by-Step Guide',
        slug: 'diy-microwave-cleaning-guide',
        excerpt: 'Learn how to deep clean your microwave using simple household items for optimal hygiene.',
        content: `A clean microwave not only looks better but also works more efficiently and lasts longer. Here's your complete guide to cleaning your microwave like a pro.

## Why Clean Your Microwave?

Food splatters and grease buildup can:
- Harbor bacteria and cause bad odors
- Reduce heating efficiency
- Attract pests
- Shorten your microwave's lifespan

## What You'll Need

- White vinegar or lemon
- Water
- Microwave-safe bowl
- Soft cloth or sponge
- Dish soap
- Baking soda (optional)

## Step-by-Step Cleaning Process

### 1. Steam Clean the Interior

Fill a microwave-safe bowl with 1 cup water and 2 tablespoons vinegar (or lemon juice). Microwave on high for 5 minutes. The steam will loosen stuck-on food and grease.

### 2. Let it Sit

After the timer stops, keep the door closed for 3 minutes. This allows the steam to work its magic.

### 3. Wipe the Interior

Carefully remove the hot bowl. Use a damp cloth to wipe all interior surfaces. The grime should come off easily now.

### 4. Clean the Turntable

Remove the turntable and wash it with dish soap and water. Dry thoroughly before placing back.

### 5. Clean the Door

Pay special attention to the door seal and hinges. Wipe with a cloth dampened with soapy water.

### 6. Address Stubborn Stains

For tough stains, make a paste with baking soda and water. Apply, let sit for 5 minutes, then wipe clean.

### 7. Clean the Exterior

Wipe the outside with a damp cloth. Use glass cleaner for the control panel, avoiding moisture in buttons.

### 8. Deodorize

Leave a bowl of baking soda inside overnight to absorb any lingering odors.

## Cleaning Frequency

- Light wipe: After each use
- Deep clean: Weekly
- Professional servicing: Annually

## Mistakes to Avoid

❌ Don't use harsh chemicals or abrasive scrubbers
❌ Never use steel wool or metal scrapers
❌ Don't spray water directly on vents
❌ Avoid getting moisture in the control panel

## Prevention Tips

- Cover food while heating to prevent splatters
- Clean spills immediately while still fresh
- Use microwave-safe covers or paper towels
- Keep a microwave-safe wipe cloth inside

Regular cleaning takes just 10 minutes and can add years to your microwave's life while ensuring hygienic food preparation!`,
        category: 'DIY',
        author_name: 'Sneha Kapoor',
        author_image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
        featured_image: 'https://images.pexels.com/photos/7195076/pexels-photo-7195076.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['DIY', 'Microwave', 'Cleaning', 'Maintenance'],
        read_time: 6,
        published: true
    }
];

export const brands = [
    { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LG_logo_%282014%29.svg/1200px-LG_logo_%282014%29.svg.png?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Samsung_old_logo_before_year_2015.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Whirlpool', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Whirlpool_Corporation_Logo_%28as_of_2017%29.svg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1280px-Sony_logo.svg.png?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Voltas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Voltas_logo.svg/2560px-Voltas_logo.svg.png?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Godrej', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png?auto=compress&cs=tinysrgb&w=200' }
];

export const teamMembers = [
    {
        id: '1',
        name: 'Rajesh Sharma',
        role: 'Senior AC Technician',
        experience: '12 years',
        rating: 4.9,
        specialization: 'AC Repair & Installation',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        certifications: ['HVAC Certified', 'Refrigeration Expert']
    },
    {
        id: '2',
        name: 'Amit Kumar',
        role: 'Refrigerator Specialist',
        experience: '10 years',
        rating: 4.8,
        specialization: 'Fridge & Freezer Repair',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        certifications: ['Cooling Systems Expert', 'Compressor Specialist']
    },
    {
        id: '3',
        name: 'Vikram Patel',
        role: 'Washing Machine Expert',
        experience: '8 years',
        rating: 4.7,
        specialization: 'All Washing Machine Repairs',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
        certifications: ['Electronics Certified', 'Motor Repair Expert']
    },
    {
        id: '4',
        name: 'Suresh Reddy',
        role: 'Electronics Technician',
        experience: '9 years',
        rating: 4.8,
        specialization: 'TV & Microwave Repair',
        image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
        certifications: ['LED/LCD Expert', 'Smart TV Specialist']
    }
];
