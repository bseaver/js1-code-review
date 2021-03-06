exports.errorSample =
{
  "readyState":4,
  "responseText":"{\"meta\":{\"error\":true,\"message\":\"Invalid user_key\",\"error_code\":1000,\"http_status_code\":401}}",
  "responseJSON":
    {"meta":
      {"error":true,
        "message":"Invalid user_key",
        "error_code":1000,
        "http_status_code":401
      }
    },
  "status":401,
  "statusText":"Unauthorized"
};

exports.findDrsSample =
{
  "meta": {
    "data_type": "array",
    "item_type": "Doctor",
    "total": 3,
    "count": 3,
    "skip": 0,
    "limit": 10
  },
  "data": [
    {
      "practices": [
        {
          "location_slug": "ca-san-jose",
          "within_search_area": true,
          "distance": 47.31628625603858,
          "lat": 37.30348,
          "lon": -121.91553,
          "uid": "0169375ad98551e77d6fd693e577cb3d",
          "name": "Steven Toschi, DDS",
          "website": "http://www.drtoschi.com/",
          "description": "Dr. Steven Toschi is here for all of your family’s restorative and cosmetic dental needs including CEREC restorations, Invisalign® malocclusion correction, and dental implants.\n\nDr. Toschi also offers emergency dental services for unexpected dental trauma such as a toothache, lost crown or filling, or a chipped or cracked tooth.",
          "accepts_new_patients": true,
          "insurance_uids": [
            "deltadental-deltadentalpremier",
            "guardiandental-guardiandentalguardpreferred",
            "cignadental-cignatotaldppo",
            "bluecrosscalifornia-bccadentalblue100200300",
            "metlife-metlifepdp",
            "principalfinancialservices-principaldentalppo"
          ],
          "visit_address": {
            "city": "San Jose",
            "lat": 37.30348,
            "lon": -121.91553,
            "state": "CA",
            "state_long": "California",
            "street": "1660 Willow St",
            "street2": "Ste 1",
            "zip": "95125"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "4089787991",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ],
          "media": [
            {
              "uid": "56c53c584a460a08da0030f0",
              "status": "active",
              "url": "https://asset2.betterdoctor.com/images/56c53c584a460a08da0030f0-4_small.jpg",
              "tags": [
                "hero"
              ],
              "versions": {
                "small": "https://asset2.betterdoctor.com/images/56c53c584a460a08da0030f0-4_small.jpg",
                "medium": "https://asset2.betterdoctor.com/images/56c53c584a460a08da0030f0-4_medium.jpg",
                "large": "https://asset2.betterdoctor.com/images/56c53c584a460a08da0030f0-4_large.jpg",
                "hero": "https://asset1.betterdoctor.com/images/56c53c584a460a08da0030f0-4_hero.jpg"
              }
            }
          ]
        }
      ],
      "educations": [
        {
          "school": "Georgetown University School of Dentistry",
          "degree": "DDS"
        }
      ],
      "profile": {
        "first_name": "Steven",
        "middle_name": "M",
        "last_name": "Toschi",
        "slug": "steven-toschi",
        "title": "DDS",
        "image_url": "https://asset2.betterdoctor.com/images/528a74b74214f86391000262-1_thumbnail.jpg",
        "gender": "male",
        "languages": [
          {
            "name": "English",
            "code": "en"
          }
        ],
        "bio": "Dr. Toschi's passion for dentistry began 25 years ago. As a graduate of Georgetown University School of Dentistry, he has dedicated his professional career to providing his patients with the absolute best that dentistry has to offer. He is constantly attending continuing education courses focusing on the rapidly evolving science of implant dentistry and cosmetic dentistry in order to bring his patients the latest technological advancements. He brings world class dentistry to all of his patients.\n\nBy using state of the art equipment and materials, combined with a mastery of the art of aesthetic dentistry, Dr. Toschi can always provide an individualized solution to enhance any smile. He is able to conservatively restore the youthful natural beauty of any tooth.\n\nNot just a cosmetic dentist, he also specializes in implant dentistry, treatment of the TMJ (jaw joint), occlusion (how the teeth come together), Invisalign (straighten teeth without wires), and Cerec crowns. Cerec is an all ceramic, single visit, chair side CAD/CAM restoration system. It allows Dr. Toschi to create perfectly fitting, aesthetically pleasing, strong ceramic restorations in one office visit (Crowns, Onlays, Inlays). Dr. Toschi has been using this high tech equipment since 2002. He has placed over 1000 beautiful Cerec restorations."
      },
      "ratings": [],
      "insurances": [
        {
          "insurance_plan": {
            "uid": "deltadental-deltadentalpremier",
            "name": "Delta Dental Premier",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "deltadental",
            "name": "Delta Dental"
          }
        },
        {
          "insurance_plan": {
            "uid": "guardiandental-guardiandentalguardpreferred",
            "name": "Guardian DentalGuard Preferred",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "guardiandental",
            "name": "Guardian Dental"
          }
        },
        {
          "insurance_plan": {
            "uid": "cignadental-cignatotaldppo",
            "name": "CIGNA Total DPPO",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "cignadental",
            "name": "Cigna Dental"
          }
        },
        {
          "insurance_plan": {
            "uid": "bluecrosscalifornia-bccadentalblue100200300",
            "name": "BC CA Dental Blue 100200300",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "anthem",
            "name": "Anthem"
          }
        },
        {
          "insurance_plan": {
            "uid": "metlife-metlifepdp",
            "name": "MetLife PDP",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "metlife",
            "name": "MetLife"
          }
        },
        {
          "insurance_plan": {
            "uid": "principalfinancialservices-principaldentalppo",
            "name": "Principal Dental PPO",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "principalfinancialservices",
            "name": "Principal Financial Services"
          }
        }
      ],
      "specialties": [
        {
          "uid": "general-dentist",
          "name": "General Dentistry",
          "description": "Specializes in teeth and oral health.",
          "category": "dental",
          "actor": "Dentist",
          "actors": "Dentists"
        }
      ],
      "licenses": [
        {
          "number": "33526",
          "state": "CA"
        }
      ],
      "uid": "262cd1b41f88c66a83b4bbd15e0b7eb9",
      "npi": "1033239306"
    },
    {
      "practices": [
        {
          "location_slug": "ca-encinitas",
          "within_search_area": false,
          "distance": 482.7223440951852,
          "lat": 33.038824,
          "lon": -117.285627,
          "uid": "10b4a590948995e6280404efd49bc6ed",
          "name": "Behnaz Cheikh , D.d.s. Inc.",
          "website": "http://www.bcendo.com/",
          "description": "Our mission is to provide our patients with a very comfortable environment using the latest technology,with outmost care and compassion for the well being of our patients. Root canal treatment is the treatment for relieving Toothache and  tooth pain and preserving dentition and we are commited to provide you with a calm environmet  and excellent treatment .",
          "accepts_new_patients": true,
          "insurance_uids": [],
          "visit_address": {
            "city": "Encinitas",
            "lat": 33.038824,
            "lon": -117.285627,
            "state": "CA",
            "state_long": "California",
            "street": "320 Santa Fe Dr",
            "street2": "Ste 201",
            "zip": "92024"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "7604361222",
              "type": "landline"
            },
            {
              "number": "7604700963",
              "type": "fax"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        },
        {
          "location_slug": "ca-foster-city",
          "within_search_area": true,
          "distance": 17.64574489513369,
          "lat": 37.562109,
          "lon": -122.269462,
          "uid": "0d1650088087bc3f091320bda07677b9",
          "name": "Polly Chan DDS Inc",
          "website": "http://www.familydentalfostercity.com/",
          "description": "The doctors of Family Dental have established themselves as part of a Foster City tradition of dental comfort and care by focusing on bringing their patients only the best that dentistry has to offer. They continually strive to expand their knowledge of the latest developments in their field by educating themselves and their staff on the newest dental techniques and advances. As a result, you receive the most state-of-the-art, comfortable and personalized dental care possible. Our dentists' top priorities are patient satisfaction and happiness; they have spent their careers working and training to build a practice that meets and exceeds your expectations of trusted, personalized dentistry.\n\nWe at Family Dental are proud of our extensive, handpicked staff. Our team of 15 doctors includes specialists who can cover all your dental needs. This means any dental work you may need can be done right here in the comfort of our office with a doctor you know and trust instead of having to refer out to somewhere else.",
          "accepts_new_patients": true,
          "image_urls": [
            "https://asset3.betterdoctor.com/images/527f87d44214f81d5900000a-1_original.jpg"
          ],
          "insurance_uids": [
            "bluecrosscalifornia-bccadentalblue100200300"
          ],
          "visit_address": {
            "city": "Foster City",
            "lat": 37.562109,
            "lon": -122.269462,
            "state": "CA",
            "state_long": "California",
            "street": "581 Foster City Blvd",
            "zip": "94404"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "6502869999",
              "type": "landline"
            },
            {
              "number": "6502869986",
              "type": "fax"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        }
      ],
      "educations": [
        {
          "school": "University of Minnesota",
          "graduation_year": "1987",
          "degree": "BS"
        },
        {
          "school": "University of Minnesota School of Dentistry",
          "graduation_year": "1994",
          "degree": "DDS"
        },
        {
          "school": "University of Southern California School of Dentistry  USC",
          "degree": "Residency"
        }
      ],
      "profile": {
        "first_name": "Behnaz",
        "last_name": "Cheikh",
        "slug": "behnaz-cheikh",
        "title": "DDS",
        "image_url": "https://asset2.betterdoctor.com/images/56f9c2224a460a680b002500-2_thumbnail.jpg",
        "gender": "female",
        "languages": [
          {
            "name": "English",
            "code": "en"
          }
        ],
        "bio": "Dr.  Behnaz Cheikh completed her Bachelor of Science degree at the University of Minnesota in Genetics and Cellular Biology in 1987. She received her Doctor of Dental Surgery degree with distinction from the University of Minnesota School of Dentistry in 1994. While in private practice in San Francisco, she obtained her AEGD certificate from the University of California in San Francisco, UCSF with an emphasis in Hospital Dentistry and Oral Medicine.\n\nDr. Cheikh completed two years of  Advanced Endodontic Residency at the University of Southern California School of Dentistry,  USC , where she received extensive training in Microscopic endodontic treatment. She has been practicing as an Endodotist for the past 10 years.\n\nDr. Cheikh enjoys snow skiing, traveling, playing the piano, painting, and reading in her leisure time. She is fluent in French and has had amazing life experiences traveling the world.\n\nShe is an active  is a member of the American Association of Endodontists, American Dental Association and the California Dental Association.\n\nWe are located in beautiful town of  Encinitas , North county of San Diego .\n\nWe are serving patients from all  area of San Diego area , including city of  Carlsbad, Solana beach , Carmel Valley, Del mar, Encinitas ,Oceanside, Sorento Valley ."
      },
      "ratings": [
        {
          "active": true,
          "provider": "yelp"
        }
      ],
      "insurances": [
        {
          "insurance_plan": {
            "uid": "bluecrosscalifornia-bccadentalblue100200300",
            "name": "BC CA Dental Blue 100200300",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "anthem",
            "name": "Anthem"
          }
        }
      ],
      "specialties": [
        {
          "uid": "endotontist",
          "name": "Endodontics",
          "description": "Specializes in root canal and other similar issues.",
          "category": "dental",
          "actor": "Endotontist",
          "actors": "Endotontists"
        }
      ],
      "licenses": [
        {
          "number": "43126",
          "state": "CA"
        }
      ],
      "uid": "367eeb87fba1d9858c767a8bdbcce193",
      "npi": "1134294887"
    },
    {
      "practices": [
        {
          "location_slug": "ca-san-francisco",
          "within_search_area": true,
          "distance": 3.62152608802869,
          "lat": 37.78068,
          "lon": -122.46479,
          "uid": "b4a67343a2959697c66d8b67a9b920ed",
          "name": "Geary Dental Center",
          "website": "http://www.gearydental.com/#/?link=home",
          "description": "We have all seen how the beaming smiles of movie stars inspire both admiration and envy. Who wouldn't want to flash a smile with the brilliance of sunshine? But we aren't all celebrities or millionaires.\nWith the range of dental services we offer, you don't need to spend a fortune to look fabulous and feel like a million dollars. If a dull grin, crooked tooth or a gap is making you hide your smile and undermining your confidence, you've come to exactly the right place.\nThe main reason why we are here is to make you look and feel great. Of course we deal with toothache, regular checks, and preventative care, but please take the time to read about the other wonderful treatments available to help you achieve the smile of your dreams.\nWe can also reassure you that there is gain without pain.\nDuring treatment, you will relax in a comfortable chair with a built-in massager and flat screen TV. Our dentistry will be tailored to your personal needs. It will be holistic and safe, as non-invasive as possible, and leave no toxic substances in your body.\n  \"Every tooth in a man's head is more valuable than diamonds\" - Miguel M. De Cervantes (Don Quixote 1603)\nWe will treasure each of your teeth, treating them with the delicate artistry and expertise of a master jeweler, giving you that perfect, sparkling smile.\nOnce you have seen what we offer, you may wish to discuss the available options to determine which are best for you.",
          "accepts_new_patients": true,
          "image_urls": [
            "https://asset4.betterdoctor.com/images/528f8c1c4214f86d4d000169-1_original.jpg"
          ],
          "insurance_uids": [
            "cignadental-cignatotaldppo"
          ],
          "visit_address": {
            "city": "San Francisco",
            "lat": 37.78068,
            "lon": -122.46479,
            "state": "CA",
            "state_long": "California",
            "street": "4225 Geary Blvd",
            "zip": "94118"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "4158313311",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        },
        {
          "location_slug": "ca-cupertino",
          "within_search_area": true,
          "distance": 41.20331845287994,
          "lat": 37.317048,
          "lon": -122.029676,
          "uid": "fe670b2b6ebc714a8e387f301063e7dc",
          "name": "Kouvaris Orthodontics",
          "website": "http://www.cupertinoorthodontist.com/",
          "description": "Specializing in Crowns & Bridges, Dentures, Wisdom Teeth Extractions, Cavity Preventing Sealants, Nightguards, Gum Surgery, Dental Implants, Root Canals, Lumineers and more. Trusted by professionals, Recommended by clients! With the latest technology and tools including flexible & strong rotary nickel titanium files that are only used once then disgarded, you will get quality dental care with less pain and less time in the chair.",
          "accepts_new_patients": true,
          "insurance_uids": [
            "deltadental-deltadentalppo",
            "deltadental-deltadentalpremier",
            "unitedconcordia-unitedconcordiaadvantageplusppo",
            "dentalnetworkofamerica-dentalnetworkofamericadppo",
            "assurant-assurantdhapremier",
            "unitedconcordia-unitedconcordianationalfeeforservice",
            "compbenefitscorporation-compbenefitsppo",
            "humana-humanadentalppo"
          ],
          "visit_address": {
            "city": "Cupertino",
            "lat": 37.317048,
            "lon": -122.029676,
            "state": "CA",
            "state_long": "California",
            "street": "10393 Torre Ave",
            "zip": "95014"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "4089962909",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        }
      ],
      "educations": [],
      "profile": {
        "first_name": "Vladimir",
        "last_name": "Shuster",
        "slug": "vladimir-shuster",
        "title": "DMD",
        "image_url": "https://asset2.betterdoctor.com/assets/general_doctor_male.png",
        "gender": "male",
        "languages": [
          {
            "name": "English",
            "code": "en"
          }
        ],
        "bio": "Dr. Vladimir Shuster, DMD DDS specializes in dentistry and endodontics, and currently sees patients in Alameda, California, San francisco, California, Orinda, California, San mateo, California, and San jose, California.\n\nDr. Shuster is licensed to see patients in California.\n\nIn addition to having active medical licenses, Dr. Shuster has been found during an automated background check to be clear of any malpractice history and holds one or more active medical licenses."
      },
      "ratings": [],
      "insurances": [
        {
          "insurance_plan": {
            "uid": "cignadental-cignatotaldppo",
            "name": "CIGNA Total DPPO",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "cignadental",
            "name": "Cigna Dental"
          }
        },
        {
          "insurance_plan": {
            "uid": "deltadental-deltadentalppo",
            "name": "Delta Dental PPO",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "deltadental",
            "name": "Delta Dental"
          }
        },
        {
          "insurance_plan": {
            "uid": "deltadental-deltadentalpremier",
            "name": "Delta Dental Premier",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "deltadental",
            "name": "Delta Dental"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedconcordia-unitedconcordiaadvantageplusppo",
            "name": "United Concordia Advantage Plus PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedconcordia",
            "name": "United Concordia"
          }
        },
        {
          "insurance_plan": {
            "uid": "dentalnetworkofamerica-dentalnetworkofamericadppo",
            "name": "Dental Network of America DPPO",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "dentalnetworkofamerica",
            "name": "Dental Network of America"
          }
        },
        {
          "insurance_plan": {
            "uid": "assurant-assurantdhapremier",
            "name": "Assurant DHA Premier",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "assurant",
            "name": "Assurant"
          }
        },
        {
          "insurance_plan": {
            "uid": "unitedconcordia-unitedconcordianationalfeeforservice",
            "name": "United Concordia National Fee-For-Service",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "unitedconcordia",
            "name": "United Concordia"
          }
        },
        {
          "insurance_plan": {
            "uid": "compbenefitscorporation-compbenefitsppo",
            "name": "CompBenefits PPO",
            "category": [
              "medical"
            ]
          },
          "insurance_provider": {
            "uid": "compbenefitscorporation",
            "name": "CompBenefits Corporation"
          }
        },
        {
          "insurance_plan": {
            "uid": "humana-humanadentalppo",
            "name": "Humana Dental PPO",
            "category": [
              "dental"
            ]
          },
          "insurance_provider": {
            "uid": "humana",
            "name": "Humana"
          }
        }
      ],
      "specialties": [
        {
          "uid": "general-dentist",
          "name": "General Dentistry",
          "description": "Specializes in teeth and oral health.",
          "category": "dental",
          "actor": "Dentist",
          "actors": "Dentists"
        }
      ],
      "licenses": [
        {
          "number": "45016",
          "state": "CA"
        }
      ],
      "uid": "d8e6ac5c74c6889afdb13b9ade725974",
      "npi": "1295891406"
    }
  ]
};
