// ============================================
// CONFIGURATION - PASTE YOUR API KEY HERE
// ============================================
const OPENAI_API_KEY = "" // <-- PASTE YOUR API KEY BETWEEN THE QUOTES

// ============================================
// SCHOOL DATA - Add more JSON data here
// ============================================
const schoolData = {
  university: "University of Cape Coast",
  colleges: [
    {
  "college": {
    "name": "College of Agriculture and Natural Sciences",
    "schools": [
      {
        "name": "School of Agriculture",
        "departments": [
          {
            "name": "Department of Agricultural Economics and Extension",
            "website": "https://daee.ucc.edu.gh/",
            "contact": "0247835612",
            "mail": "daee@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Agribusiness",
                  "url": "https://daee.ucc.edu.gh/programmes/agribusiness"
                },
                {
                  "name": "Bachelor of Science (Regular) Agricultural Extension",
                  "url": "https://daee.ucc.edu.gh/programmes/agriculturalextension0"
                },
                {
                  "name": "Bachelor of Science (Regular) Agricultural Extension and Community Development",
                  "url": "https://daee.ucc.edu.gh/programmes/agriculturalextensionandcommunitydevelopment"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) AGRICULTURAL ECONOMICS",
                  "url": "https://daee.ucc.edu.gh/programmes/agriculturaleconomics"
                },
                {
                  "name": "Master of Philosophy (Regular) AGRICULTURAL EXTENSION",
                  "url": "https://daee.ucc.edu.gh/programmes/agriculturalextension"
                },
                {
                  "name": "Master of Science NONGOVERNMENTAL ORGANIZATIONS (NGOS) STUDIES AND MANAGEMENT - (Sandwich)",
                  "url": "https://daee.ucc.edu.gh/programmes/nongovernmentalorganizationsngosstudiesandmanagement"
                },
                {
                  "name": "Master of Philosophy (Regular) NON GOVERNMENTAL STUDIES AND COMMUNITY DEVELOPMENT",
                  "url": "https://daee.ucc.edu.gh/programmes/nongovernmentalstudiesandcommunitydevelopment"
                }
              ]
            }
          },
          {
            "name": "Department of Agricultural Engineering",
            "website": "https://agricengineering.ucc.edu.gh/",
            "contact": "0246901743",
            "mail": "dae@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) AgroProcessing",
                  "url": "https://agricengineering.ucc.edu.gh/programmes/agroprocessing"
                },
                {
                  "name": "Bachelor of Science (Regular) Post – Harvest Technology",
                  "url": "https://agricengineering.ucc.edu.gh/programmes/postharvesttechnology"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Irrigation Technology",
                  "url": "https://agricengineering.ucc.edu.gh/programmes/irrigationtechnology"
                },
                {
                  "name": "Master of Philosophy (Regular) Mechanisation",
                  "url": "https://agricengineering.ucc.edu.gh/programmes/mechanisation"
                }
              ]
            }
          },
          {
            "name": "Department of Animal Science",
            "website": "https://animalscience.ucc.edu.gh/",
            "contact": "0248512096",
            "mail": "das@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Animal Science (Animal Breeding and Genetics)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalscienceanimalbreedingandgenetics"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Animal Science (Animal Nutrition)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalscienceanimalnutrition0"
                },
                {
                  "name": "Master of Philosophy (Regular) Animal Science (Animal Nutrition)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalscienceanimalnutrition"
                },
                {
                  "name": "Master of Philosophy (Regular) Animal Science (Management of Livestock Enterprises)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalsciencemanagementlivestockenterprises0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Animal Science (Management of Livestock Enterprises)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalsciencemanagementlivestockenterprises"
                },
                {
                  "name": "Master of Philosophy (Regular) Animal Science (Meat Science and Technology)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalsciencemeatscienceandtechnology0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Animal Science (Pasture and Range Management)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalsciencepastureandrangemanagement"
                },
                {
                  "name": "Master of Philosophy (Regular) Pasture and Range Management",
                  "url": "https://animalscience.ucc.edu.gh/programmes/pastureandrangemanagement"
                }
              ]
            }
          },
          {
            "name": "Department of Crop Science",
            "website": "https://cropscience.ucc.edu.gh/",
            "contact": "0244379821",
            "mail": "dcs@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Agriculture",
                  "url": "https://cropscience.ucc.edu.gh/programmes/agriculture0"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular) CROP SCIENCE",
                  "url": "https://cropscience.ucc.edu.gh/programmes/cropscience0"
                },
                {
                  "name": "Master of Philosophy (Regular) CROP SCIENCE",
                  "url": "https://cropscience.ucc.edu.gh/programmes/cropscience"
                },
                {
                  "name": "Master of Philosophy (Regular) Seed Science and Technology",
                  "url": "https://cropscience.ucc.edu.gh/programmes/seedscienceandtechnology"
                }
              ]
            }
          },
          {
            "name": "Department of Soil Science",
            "website": "https://soilscience.ucc.edu.gh/",
            "contact": "0206941387",
            "mail": "dss@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Agriculture",
                  "url": "https://soilscience.ucc.edu.gh/programmes/agriculture1"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular) Land Use And Environmental Science",
                  "url": "https://soilscience.ucc.edu.gh/programmes/landuseandenvironmentalscience0"
                },
                {
                  "name": "Master of Philosophy (Regular) Land Use And Environmental Science",
                  "url": "https://soilscience.ucc.edu.gh/programmes/landuseandenvironmentalscience"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Soil Science",
                  "url": "https://soilscience.ucc.edu.gh/programmes/soilscience0"
                },
                {
                  "name": "Master of Philosophy (Regular) Soil Science",
                  "url": "https://soilscience.ucc.edu.gh/programmes/soilscience"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "School of Biological Sciences",
        "departments": [
          {
            "name": "Department of Biochemistry",
            "website": "https://biochemistry.ucc.edu.gh/",
            "contact": "0208735604",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Biochemistry",
                  "url": "https://biochemistry.ucc.edu.gh/programmes/biochemistry"
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Conservation Biology and Entomology",
            "website": "https://dcbe.ucc.edu.gh/",
            "contact": "",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Entomology and Wildlife",
                  "url": "https://dcbe.ucc.edu.gh/programmes/entomologyandwildlife"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular) Entomology",
                  "url": "https://dcbe.ucc.edu.gh/programmes/entomology0"
                },
                {
                  "name": "Master of Science (Regular) Entomology",
                  "url": "https://dcbe.ucc.edu.gh/programmes/entomology"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Wildlife Management",
                  "url": "https://dcbe.ucc.edu.gh/programmes/wildlifemanagement0"
                },
                {
                  "name": "Master of Philosophy (Regular) Wildlife Management",
                  "url": "https://dcbe.ucc.edu.gh/programmes/wildlifemanagement"
                }
              ]
            }
          },
          {
            "name": "Department of Environmental Science",
            "website": "https://environmental.ucc.edu.gh/",
            "contact": "0204519826",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Environmental Science",
                  "url": "https://environmental.ucc.edu.gh/programmes/environmentalscience"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) MPhil. Clean Energy and Environment",
                  "url": "https://environmental.ucc.edu.gh/programmes/mphilcleanenergyandenvironment"
                },
                {
                  "name": "Master of Philosophy (Regular) MPhil. Environmental Science",
                  "url": "https://environmental.ucc.edu.gh/programmes/mphilenvironmentalscience"
                },
                {
                  "name": "Master of Science (Regular) MSc. Clean Energy and Environment",
                  "url": "https://environmental.ucc.edu.gh/programmes/msccleanenergyandenvironment"
                },
                {
                  "name": "Doctor of Philosophy (Regular) PhD. Clean Energy and Environment",
                  "url": "https://environmental.ucc.edu.gh/programmes/phdcleanenergyandenvironment"
                }
              ]
            }
          },
          {
            "name": "Department of Fisheries & Aquatic Science",
            "website": "https://dfas.ucc.edu.gh/",
            "contact": "0209384715",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Fisheries and Aquatic Science",
                  "url": "https://dfas.ucc.edu.gh/programmes/fisheriesandaquaticscience"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Aquaculture",
                  "url": "https://dfas.ucc.edu.gh/programmes/aquaculture"
                },
                {
                  "name": "Master of Philosophy (Regular) Fisheries Science",
                  "url": "https://dfas.ucc.edu.gh/programmes/fisheriesscience"
                },
                {
                  "name": "Master of Philosophy (Regular) Oceanography and Limnology",
                  "url": "https://dfas.ucc.edu.gh/programmes/oceanographyandlimnology"
                },
                {
                  "name": "Master of Philosophy (Regular) Integrated Coastal Zone Management",
                  "url": "https://dfas.ucc.edu.gh/programmes/integratedcoastalzonemanagement"
                }
              ]
            }
          },
          {
            "name": "Department of Forensic Sciences",
            "website": "https://forensic.ucc.edu.gh/",
            "contact": "0547196038",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bsc Forensic Science (Regular)",
                  "url": "https://admissions.ucc.edu.gh/catalogue/programme/bsc-forensic-science"
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Molecular Biology & Biotechnology",
            "website": "https://dmbb.ucc.edu.gh/",
            "contact": "0548624719",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "MSc in Molecular Biology and Biotechnology",
                  "url": "https://dmbb.ucc.edu.gh/postgraduateadmission"
                },
                {
                  "name": "MPhil in Molecular Biology and Biotechnology",
                  "url": "https://dmbb.ucc.edu.gh/programmes"
                },
                {
                  "name": "PhD in Molecular Biology and Biotechnology",
                  "url": "https://dmbb.ucc.edu.gh/postgraduateadmission"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "School of Physical Sciences",
        "departments": [
          {
            "name": "Department of Chemistry",
            "website": "https://chemistry.ucc.edu.gh/",
            "contact": "0543059841",
            "mail": "doc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/chemistry-0"
                },
                {
                  "name": "Bachelor of Science (Regular) Industrial Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/industrial-chemistry"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular) Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/chemistry-2"
                },
                {
                  "name": "Master of Science (Regular) Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/chemistry-1"
                },
                {
                  "name": "Master of Philosophy (Regular) Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/chemistry"
                }
              ]
            }
          },
          {
            "name": "Department of Computer Science and Information Technology",
            "website": "https://dcsit.ucc.edu.gh/",
            "contact": "054978213",
            "mail": "dcsit@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Information Technology",
                  "url": "https://dcsit.ucc.edu.gh/programmes/information-technology"
                },
                {
                  "name": "Bachelor of Science (Regular) Computer Science",
                  "url": "https://dcsit.ucc.edu.gh/programmes/computer-science"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular)",
                  "url": "https://dcsit.ucc.edu.gh/programmes/awbc-academics-without-borders-canada"
                }
              ]
            }
          },
          {
            "name": "Department of Laboratory Technology",
            "website": "https://labtech.ucc.edu.gh/",
            "contact": "0556842901",
            "mail": "labtech@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Laboratory Technology",
                  "url": "https://labtech.ucc.edu.gh/programmes/laboratory-technology-0"
                }
              ],
              "postgraduate": [
                {
                  "name": "Bachelor of Science Laboratory Technology - (Sandwich)",
                  "url": "https://labtech.ucc.edu.gh/programmes/laboratory-technology"
                }
              ]
            }
          },
          {
            "name": "Department of Mathematics",
            "website": "https://mathematics.ucc.edu.gh/",
            "contact": "0559173648",
            "mail": "dom@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Mathematics",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics"
                },
                {
                  "name": "Bachelor of Science (Regular) Mathematics-with-Business",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics-business"
                },
                {
                  "name": "Bachelor of Science (Regular) Mathematics-with-Economics",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics-economics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Mathematics",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics-1"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Mathematics",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics-0"
                }
              ]
            }
          },
          {
            "name": "Department of Physics",
            "website": "https://physics.ucc.edu.gh/",
            "contact": "0552038749",
            "mail": "dop@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Engineering Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/engineering-physics"
                },
                {
                  "name": "Bachelor of Science (Regular) Meteorology and Atmospheric Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/meteorology-and-atmospheric-physics"
                },
                {
                  "name": "Bachelor of Science (Regular) Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/physics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/physics-0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/physics-1"
                }
              ]
            }
          },
          {
            "name": "Department of Statistics",
            "website": "https://statistics.ucc.edu.gh/",
            "contact": "0557498162",
            "mail": "dos@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Actuarial Science",
                  "url": "https://statistics.ucc.edu.gh/programmes/actuarial-science"
                },
                {
                  "name": "Bachelor of Science (Regular) Statistics",
                  "url": "https://statistics.ucc.edu.gh/programmes/statistics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Science (Regular) Statistics",
                  "url": "https://statistics.ucc.edu.gh/programmes/statistics-1"
                },
                {
                  "name": "Master of Philosophy (Regular) Statistics",
                  "url": "https://statistics.ucc.edu.gh/programmes/statistics-0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Statistics",
                  "url": "https://statistics.ucc.edu.gh/programmes/statistics-2"
                }
              ]
            }
          },
          {
            "name": "Department of Water and Sanitation",
            "website": "https://dws.ucc.edu.gh/",
            "contact": "0596384170",
            "mail": "dws@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Water and Sanitation",
                  "url": "https://dws.ucc.edu.gh/programmes/water-and-sanitation"
                }
              ],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Sustainable Engineering",
        "departments": [
          {
            "name": "Department of Agricultural and Mechanical Engineering",
            "website": "https://dame.ucc.edu.gh/",
            "contact": "0592748913",
            "mail": "dame@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor Of Science In Agricultural Engineering",
                  "url": "https://dame.ucc.edu.gh/bsc.agric_engineering"
                }
              ],
              "postgraduate": [
                {
                  "name": "MASTER OF PHILOSOPHY IN AGRICULTURAL MECHANISATION AND MACHINERY TECHNOLOGY",
                  "url": "https://dame.ucc.edu.gh/postgrad_prog.dame"
                },
                {
                  "name": "PhD IN AGRICULTURAL MECHANISATION AND MACHINERY TECHNOLOGY",
                  "url": "https://dame.ucc.edu.gh/postgrad_prog.dame"
                }
              ]
            }
          },
          {
            "name": "Department of Chemical and Renewable Energy Engineering",
            "website": "https://dcree.ucc.edu.gh/",
            "contact": "0598150364",
            "mail": "dcree@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "BACHELOR OF SCIENCE (CHEMICAL ENGINEERING)",
                  "url": "https://dcree.ucc.edu.gh/undergraduate.dcree"
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Civil and Environmental Engineering",
            "website": "https://dcee.ucc.edu.gh/",
            "contact": "0594029681",
            "mail": "dcee@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science in Water and Public Health Engineering",
                  "url": "https://dcee.ucc.edu.gh/undergraduate.dcee"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Science / Philosophy In Coastal Engineering",
                  "url": "https://dcee.ucc.edu.gh/postgraduate.dcee"
                },
                {
                  "name": "PhD In Coastal Engineering",
                  "url": "https://dcee.ucc.edu.gh/postgraduate.dcee"
                }
              ]
            }
          }
        ]
      }
    ]
  }
},   // End of college 1(CAANS). Next is college 2

    {
  "college": {
    "name": "College of Education Studies",
    "facultiesAndSchools": [
      {
        "name": "Faculty of Educational Foundations",
        "departments": [
          {
            "name": "Department of Basic Education",
            "website": "https://basiceducation.ucc.edu.gh/",
            "contact": "0267354098",
            "mail": "dbe@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education Basic Education (Regular)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/basiceducation"
                },
                {
                  "name": "Bachelor of Education Early childhood education (Sandwich)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/earlychildhoodeducation3"
                },
                {
                  "name": "Bachelor of Education Early childhood education (Regular)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/earlychildhoodeducation1"
                },
                {
                  "name": "Bachelor of Education Early childhood educationcloned - (Sandwich)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/earlychildhoodeducationcloned"
                },
                {
                  "name": "Bachelor of Education JHS Education (Regular)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/jhseducation"
                },
                {
                  "name": "Bachelor of Education Primary Education (Regular)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/primaryeducation"
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Counselling Centre",
            "website": "https://counselling.ucc.edu.gh/",
            "contact": "0269804713",
            "mail": "cc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Education and Psychology",
            "website": "https://dep.ucc.edu.gh/",
            "contact": "0261548976",
            "mail": "dep@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "B.Sc Psychology",
                  "url": "https://dep.ucc.edu.gh/programmes/bscpsychology"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Clinical Health Psychology",
                  "url": "https://dep.ucc.edu.gh/programmes/clinicalhealthpsychology0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Clinical Health Psychology",
                  "url": "https://dep.ucc.edu.gh/programmes/clinicalhealthpsychology"
                },
                {
                  "name": "Master of Philosophy (Regular) EDUCATIONAL PSYCHOLOGY",
                  "url": "https://dep.ucc.edu.gh/programmes/educationalpsychology0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) EDUCATIONAL PSYCHOLOGY",
                  "url": "https://dep.ucc.edu.gh/programmes/educationalpsychology"
                },
                {
                  "name": "Master of Education (Regular) HISTORY OF EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/historyeducation"
                },
                {
                  "name": "Master of Philosophy (Regular) MEASUREMENT AND EVALUATION",
                  "url": "https://dep.ucc.edu.gh/programmes/measurementandevaluation0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) MEASUREMENT AND EVALUATION",
                  "url": "https://dep.ucc.edu.gh/programmes/measurementandevaluation"
                },
                {
                  "name": "Master of Philosophy (Regular) SOCIOLOGY OF EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/sociologyeducation0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) SOCIOLOGY OF EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/sociologyeducation"
                },
                {
                  "name": "Master of Philosophy (Regular) SPECIAL EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/specialeducation0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) SPECIAL EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/specialeducation"
                }
              ]
            }
          },
          {
            "name": "Department of Guidance and Counselling",
            "website": "https://dgc.ucc.edu.gh/",
            "contact": "0268635204",
            "mail": "docc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) GUIDANCE AND COUNSELLING",
                  "url": "https://dgc.ucc.edu.gh/programmes/guidanceandcounselling"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Education (Regular) Guidance and Counselling",
                  "url": "https://dgc.ucc.edu.gh/programmes/guidanceandcounselling1"
                },
                {
                  "name": "Master of Arts (Regular) Guidance and Counselling",
                  "url": "https://dgc.ucc.edu.gh/programmes/guidanceandcounselling0"
                },
                {
                  "name": "Master of Philosophy (Regular) M.Phil Guidance and Counselling",
                  "url": "https://dgc.ucc.edu.gh/programmes/mphilguidanceandcounselling"
                },
                {
                  "name": "Master of Philosophy (Regular) PHIL REHABILITATION",
                  "url": "https://dgc.ucc.edu.gh/programmes/mphilrehabilitation"
                },
                {
                  "name": "Master of Philosophy (Regular) STUDENT AFFAIRS AND SERVICE",
                  "url": "https://dgc.ucc.edu.gh/programmes/studentaffairsandservice"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Ph.D Guidance and Counselling",
                  "url": "https://dgc.ucc.edu.gh/programmes/phdguidanceandcounselling"
                }
              ]
            }
          },
          {
            "name": "Centre for Child Development Research and Referral",
            "website": "https://ccdrr.ucc.edu.gh/",
            "contact": "0274916850",
            "mail": "ccdrr@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "Faculty of Humanities and Social Sciences Education",
        "departments": [
          {
            "name": "Department of Business and Social Sciences Education",
            "website": "",
            "contact": "0278034169",
            "mail": "dbsse@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Arts Education",
            "website": "https://artseducation.ucc.edu.gh/",
            "contact": "0564189073",
            "mail": "dae@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) Arts",
                  "url": "https://artseducation.ucc.edu.gh/programmes/arts-0"
                }
              ],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "Faculty of Science and Technology Education",
        "departments": [
          {
            "name": "Department of Vocational and Technical Education",
            "website": "https://votec.ucc.edu.gh/",
            "contact": "0272659481",
            "mail": "dvte@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) Communication Design",
                  "url": "https://votec.ucc.edu.gh/programmes/communicationdesign"
                },
                {
                  "name": "Bachelor of Education (Regular) Clothing and Textiles",
                  "url": "https://votec.ucc.edu.gh/programmes/clothingandtextiles0"
                },
                {
                  "name": "Bachelor of Education (Regular) Bachelor of Fine Art Education (Painting or Sculpture)",
                  "url": "https://votec.ucc.edu.gh/programmes/bachelorfinearteducationpaintingorsculpture"
                },
                {
                  "name": "Bachelor of Education (Regular) Construction Technology Education",
                  "url": "https://votec.ucc.edu.gh/programmes/constructiontechnologyeducation"
                },
                {
                  "name": "Bachelor of Education (Regular) Food and Nutrition",
                  "url": "https://votec.ucc.edu.gh/programmes/foodandnutrition0"
                },
                {
                  "name": "Bachelor of Education (Regular) Home Economics",
                  "url": "https://votec.ucc.edu.gh/programmes/homeeconomics1"
                },
                {
                  "name": "Bachelor of Education Home Economics - (Sandwich)",
                  "url": "https://votec.ucc.edu.gh/programmes/homeeconomics2"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Clothing & Textiles",
                  "url": "https://votec.ucc.edu.gh/programmes/clothingandtextiles"
                },
                {
                  "name": "Master of Philosophy (Regular) Family Management",
                  "url": "https://votec.ucc.edu.gh/programmes/familymanagement"
                },
                {
                  "name": "Master of Philosophy (Regular) Food & Nutrition",
                  "url": "https://votec.ucc.edu.gh/programmes/foodandnutrition"
                },
                {
                  "name": "Master of Philosophy (Regular) Home Economics",
                  "url": "https://votec.ucc.edu.gh/programmes/homeeconomics0"
                },
                {
                  "name": "Master of Education Home Economics - (Sandwich)",
                  "url": "https://votec.ucc.edu.gh/programmes/homeeconomics"
                },
                {
                  "name": "Master of Philosophy (Regular) Vocational & Technical Education",
                  "url": "https://votec.ucc.edu.gh/programmes/vocationalandtechnicaleducation"
                }
              ]
            }
          },
          {
            "name": "Department of Science Education",
            "website": "https://scienceeducation.ucc.edu.gh/",
            "contact": "0567903218",
            "mail": "dse@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) BEd Science",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/bedscience"
                },
                {
                  "name": "Bachelor of Science (Regular) BSc Bachelor of Education",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/bscbacheloreducation"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Sandwich) M.Phil Science Education",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/mphilscienceeducation"
                },
                {
                  "name": "Master of Science (sandwich) M.Sc Science Education",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/mscscienceeducation"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Ph.D Science Education",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/phdscienceeducation"
                }
              ]
            }
          },
          {
            "name": "Department of Health, Physical Education and Recreation",
            "website": "https://hper.ucc.edu.gh/",
            "contact": "0562348917",
            "mail": "dhper@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) HEALTH, PHYSICAL EDUCATION AND RECREATION",
                  "url": "https://hper.ucc.edu.gh/programmes/healthphysicaleducationandrecreation"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts (Regular) Health Education",
                  "url": "https://hper.ucc.edu.gh/programmes/healtheducation"
                },
                {
                  "name": "Doctor of Philosophy (Regular) HEALTH PROMOTION",
                  "url": "https://hper.ucc.edu.gh/programmes/healthpromotion"
                },
                {
                  "name": "Master of Education (Regular) Physical Education",
                  "url": "https://hper.ucc.edu.gh/programmes/physicaleducation0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Physical Education",
                  "url": "https://hper.ucc.edu.gh/programmes/physicaleducation"
                }
              ]
            }
          },
          {
            "name": "Department of Mathematics and ICT Education",
            "website": "https://dmicte.ucc.edu.gh/",
            "contact": "0569851704",
            "mail": "dmie@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) B.Ed Computer Science",
                  "url": "https://dmicte.ucc.edu.gh/programmes/bedcomputerscience"
                },
                {
                  "name": "Bachelor of Education (Regular) B.Ed Mathematics",
                  "url": "https://dmicte.ucc.edu.gh/programmes/bedmathematics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Education (Regular) M.Ed Information Technology",
                  "url": "https://dmicte.ucc.edu.gh/programmes/medinformationtechnology"
                },
                {
                  "name": "Master of Education (Sandwich) M.Ed Mathematics Education",
                  "url": "https://dmicte.ucc.edu.gh/programmes/medmathematicseducation"
                },
                {
                  "name": "Master of Philosophy (Regular) M.Phil Mathematics Education",
                  "url": "https://dmicte.ucc.edu.gh/programmes/mphilmathematicseducation0"
                },
                {
                  "name": "Master of Philosophy (Sandwich) M.Phil Mathematics Education",
                  "url": "https://dmicte.ucc.edu.gh/programmes/mphilmathematicseducation"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Ph.D Mathematics Education",
                  "url": "https://dmicte.ucc.edu.gh/programmes/phdmathematicseducation"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "School of Educational Development and Outreach",
        "departments": [
          {
            "name": "Center for Teacher Professional Development",
            "website": "https://ctpd.ucc.edu.gh/",
            "contact": "0506143978",
            "mail": "ctpd@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Center for Teaching Support",
            "website": "https://cts.ucc.edu.gh/",
            "contact": "0509821654",
            "mail": "cts@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "Master of Education (Regular) Master of Education in Teaching in Higher Education Institution",
                  "url": "https://cts.ucc.edu.gh/programmes/master-education-teaching-higher-education-institution"
                }
              ]
            }
          },
          {
            "name": "Institute of Education",
            "website": "https://ioe.ucc.edu.gh/",
            "contact": "0535560996, 0535410424, 0246337487 (Whatsapp Only), 0332136925, 0332133796",
            "mail": "ioe@ucc.edu.gh, secretary.ioe@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            },
            "affiliatedColleges": [
              {
                "name": "Abetifi College of Education",
                "url": "https://ioe.ucc.edu.gh/abetificollegeofeducation"
              },
              {
                "name": "Atebubu College of Education",
                "url": "https://ioe.ucc.edu.gh/atebubucollegeofeducation"
              },
              {
                "name": "Berekum College of Education",
                "url": ""
              },
              {
                "name": "Christ the Teacher College of Education",
                "url": ""
              },
              {
                "name": "Foso College of Education",
                "url": "https://ioe.ucc.edu.gh/fosocollegeofeducation"
              },
              {
                "name": "Holy Child College of Education",
                "url": ""
              },
              {
                "name": "Holy Spirit College of Education",
                "url": ""
              },
              {
                "name": "Jasikan College of Education",
                "url": ""
              },
              {
                "name": "Kibi Presbyterian College of Education",
                "url": ""
              },
              {
                "name": "Nsawkaw College of Education",
                "url": "https://ioe.ucc.edu.gh/nsawkwacollegeofeducation"
              },
              {
                "name": "Offinso College of Education",
                "url": "https://ioe.ucc.edu.gh/offinsocollegeofeducation"
              },
              {
                "name": "OLA College of Education",
                "url": ""
              },
              {
                "name": "Seventh day Adventist College of Education",
                "url": "https://ioe.ucc.edu.gh/affiliatedcollege/seventhdayadventistcollegeofeducation"
              },
              {
                "name": "St. Ambrose College of Education",
                "url": ""
              },
              {
                "name": "St. Francis College of Education",
                "url": ""
              },
              {
                "name": "St. Monica College of Education",
                "url": ""
              },
              {
                "name": "St. Teresa's College of Education",
                "url": "https://ioe.ucc.edu.gh/stteresacollegeofeducation"
              }
            ]
          }
        ]
      }
    ]
  }
}, // End of college 2 (Education Studies). Next is college 3

  {
  "college": {
    "name": "College of Humanities and Legal Studies",
    "facultiesAndSchools": [
      {
        "name": "Faculty of Arts",
        "departments": [
          {
            "name": "Centre for African and International Studies",
            "website": "https://cais.ucc.edu.gh/",
            "contact": "0503478912",
            "mail": "cais@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts (African Studies)",
                  "url": "https://cais.ucc.edu.gh/programmes/bachelor-arts-african-studies"
                }
              ],
              "postgraduate": [],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of Classics and Philosophy",
            "website": "https://dcp.ucc.edu.gh/",
            "contact": "0507689031",
            "mail": "dcp@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts",
                  "url": "https://dcp.ucc.edu.gh/programmes/bachelor-arts"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts Classics",
                  "url": "https://dcp.ucc.edu.gh/programmes/master-arts-classics"
                },
                {
                  "name": "Master of Arts Philosophy",
                  "url": "https://dcp.ucc.edu.gh/programmes/master-arts-philosophy"
                },
                {
                  "name": "Master of Philosophy Philosophy",
                  "url": "https://dcp.ucc.edu.gh/programmes/master-philosophy-philosophy"
                },
                {
                  "name": "Master of Philosophy Classics",
                  "url": "https://dcp.ucc.edu.gh/programmes/master-philosophy-classics"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of Communication Studies",
            "website": "https://comstudies.ucc.edu.gh/",
            "contact": "0574910836",
            "mail": "william.ghasi@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts Communication Studies",
                  "url": "https://comstudies.ucc.edu.gh/programmes/bachelor-arts-communication-studies"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts Communication Studies",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-arts-communication-studies"
                },
                {
                  "name": "Master of Arts Communication Studies - (sandwich)",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-arts-communication-studies-sandwich"
                },
                {
                  "name": "Master of Arts Teaching Communicative Skills",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-arts-teaching-communicative-skills"
                },
                {
                  "name": "Master of Arts Teaching Communicative Skills - (Sandwich)",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-arts-teaching-communicative-skills-sandwich"
                },
                {
                  "name": "Master of Philosophy Communication Studies",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-philosophy-communication-studies"
                },
                {
                  "name": "Master of Philosophy Teaching Communicative Skills",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-philosophy-teaching-communicative-skills"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of English",
            "website": "https://english.ucc.edu.gh/",
            "contact": "",
            "mail": "doe@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts",
                  "url": "https://english.ucc.edu.gh/programmes/bachelor-arts"
                },
                {
                  "name": "Bachelor of English",
                  "url": "https://english.ucc.edu.gh/programmes/ba-english"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts English Language",
                  "url": "https://english.ucc.edu.gh/programmes/master-arts-english-language"
                },
                {
                  "name": "Master of Arts Literature in English - (Sandwich)",
                  "url": "https://english.ucc.edu.gh/programmes/master-arts-literature-english-sandwich"
                },
                {
                  "name": "Master of Philosophy English Language",
                  "url": "https://english.ucc.edu.gh/programmes/master-philosophy-english-language"
                },
                {
                  "name": "Master of Philosophy Literature in English - Sandwich",
                  "url": "https://english.ucc.edu.gh/programmes/master-philosophy-literature-english-sandwich"
                },
                {
                  "name": "MAster of Philosophy Literature in English",
                  "url": "https://english.ucc.edu.gh/programmes/master-philosophy-literature-english"
                },
                {
                  "name": "Doctor of Philosophy English Language",
                  "url": "https://english.ucc.edu.gh/programmes/doctor-philosophy-english-language"
                },
                {
                  "name": "Doctor of Philosophy Literature in English",
                  "url": "https://english.ucc.edu.gh/programmes/doctor-philosophy-literature-english"
                }
              ],
              "diploma": [],
              "certificate": [
                {
                  "name": "Proficiency Certificate in English Language",
                  "url": "https://english.ucc.edu.gh/programmes/proficiency-certificate-english-language"
                }
              ]
            }
          },
          {
            "name": "Department of French",
            "website": "https://french.ucc.edu.gh/",
            "contact": "0578602194",
            "mail": "dof@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy French",
                  "url": "https://french.ucc.edu.gh/programmes/doctor-philosophy-french"
                },
                {
                  "name": "Doctor of Philosophy French as a Foreign Language",
                  "url": "https://french.ucc.edu.gh/programmes/doctor-philosophy-french-foreign-language"
                },
                {
                  "name": "Doctor of Philosophy French Language & Didactics",
                  "url": "https://french.ucc.edu.gh/programmes/doctor-philosophy-french-language-and-didactics"
                },
                {
                  "name": "Doctor of Philosophy Comparative Francophone & French Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/doctor-philosophy-comparative-francophone-and-french-literature-and-civilisation"
                },
                {
                  "name": "Master of Philosophy French Linguistics - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-linguistics-sandwich"
                },
                {
                  "name": "Master of Philosophy French Language & Didactics",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-language-and-didactics"
                },
                {
                  "name": "Master of Philosophy Comparative Francophone & French Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-comparative-francophone-and-french-literature-and-civilisation"
                },
                {
                  "name": "Master of Philosophy Linguistics & Didactics",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-linguistics-and-didactics"
                },
                {
                  "name": "Master of Philosophy French - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-sandwich"
                },
                {
                  "name": "Master of Philosophy French",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french"
                },
                {
                  "name": "Master of Philosophy French Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-literature-and-civilization"
                },
                {
                  "name": "Master of Philosophy Comparative French & Francophone African Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-comparative-french-and-francophone-african-literature-and-civilization"
                },
                {
                  "name": "Master of Philosophy Comparative French & African Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-comparative-french-and-african-literature-and-civilization"
                },
                {
                  "name": "Master of Philosophy Bilingual Translation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-bilingual-translation"
                },
                {
                  "name": "Master of Philosophy African Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-african-literature-and-civilization"
                },
                {
                  "name": "Master of Philosophy French Language & Didactics - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-language-and-didactics-sandwich"
                },
                {
                  "name": "Master of Philosophy Bilingual Translation - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-bilingual-translation-sandwich"
                },
                {
                  "name": "Master of Philosophy Applied French Linguistics - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-arts-applied-french-linguistics-sandwich"
                },
                {
                  "name": "Master of Arts Comparative Francophone & French Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-arts-comparative-francophone-and-french-literature-and-civilisation"
                },
                {
                  "name": "Master of Arts French Language & Didactics",
                  "url": "https://french.ucc.edu.gh/programmes/master-arts-french-language-and-didactics"
                },
                {
                  "name": "Master of Arts Bilingual Translation - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-arts-bilingual-translation-sandwich"
                }
              ],
              "diploma": [
                {
                  "name": "Diploma in French for Special Purposes - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/diploma-french-special-purposes-sandwich"
                }
              ],
              "certificate": []
            }
          },
          {
            "name": "Department of Ghanaian Language and Linguistics",
            "website": "https://gll.ucc.edu.gh/",
            "contact": "0572357941",
            "mail": "dgl@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts Linguistics",
                  "url": "https://gll.ucc.edu.gh/programmes/bachelor-arts-linguistics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy EWE",
                  "url": "https://gll.ucc.edu.gh/programmes/master-philosophy-ewe"
                },
                {
                  "name": "Master of Philosophy Ghanaian Languages",
                  "url": "https://gll.ucc.edu.gh/programmes/master-philosophy-ghanaian-languages"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of History",
            "website": "https://history.ucc.edu.gh/",
            "contact": "0243905176",
            "mail": "god@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "Master of Arts History",
                  "url": "https://history.ucc.edu.gh/programmes/master-arts-history"
                },
                {
                  "name": "Master of Philosophy History",
                  "url": "https://history.ucc.edu.gh/programmes/master-philosophy-history"
                },
                {
                  "name": "Doctor of Philosophy History",
                  "url": "https://history.ucc.edu.gh/programmes/doctor-philosophy-history"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of Music & Dance",
            "website": "https://music.ucc.edu.gh/",
            "contact": "0246819430",
            "mail": "domd@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Music",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-music"
                },
                {
                  "name": "Bachelor of Fine Arts",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-fine-arts"
                },
                {
                  "name": "Bachelor of Arts Music & Theatre Studies",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-arts-music-and-theatre-studies"
                },
                {
                  "name": "Bachelor of Arts Dance",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-arts-dance"
                },
                {
                  "name": "Bachelor of Fine Arts - Sandwich",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-fine-arts-sandwich"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts Music",
                  "url": "https://music.ucc.edu.gh/programmes/master-arts-music"
                },
                {
                  "name": "Master of Philosophy Musicology",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-musicology"
                },
                {
                  "name": "Master of Philosophy Ethnomusicology",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-ethnomusicology"
                },
                {
                  "name": "Master of Philosophy Music Composition",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-music-composition"
                },
                {
                  "name": "Master of Philosophy Music Theory & Composition",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-music-theory-and-composition"
                },
                {
                  "name": "Master of Philosophy Music & Education",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-music-education"
                },
                {
                  "name": "Master of Philosophy Music",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-music"
                },
                {
                  "name": "Doctor of Philosophy Ethnomusicology",
                  "url": "https://music.ucc.edu.gh/programmes/doctor-philosophy-ethnomusicology"
                },
                {
                  "name": "Doctor of Philosophy Music Theory & Composition",
                  "url": "https://music.ucc.edu.gh/programmes/doctor-philosophy-music-theory-and-composition"
                },
                {
                  "name": "Doctor of Philosophy Music Education",
                  "url": "https://music.ucc.edu.gh/programmes/doctor-philosophy-music-education"
                },
                {
                  "name": "Doctor of Philosophy Music (Partime)",
                  "url": "https://music.ucc.edu.gh/programmes/doctor-philosophy-music-part-time"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of Religion and Human Values",
            "website": "https://rhv.ucc.edu.gh/",
            "contact": "0249571082",
            "mail": "drhv@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "M.A Religion & Human Values - Sandwich",
                  "url": "https://rhv.ucc.edu.gh/programmes/ma-religion-and-human-values-sandwich"
                },
                {
                  "name": "M . Phil Religious and Human Values",
                  "url": "https://rhv.ucc.edu.gh/programmes/mphil-religion-and-human-values"
                },
                {
                  "name": "Master of Philosophy Religion & Human Values - Sandwich",
                  "url": "https://rhv.ucc.edu.gh/programmes/master-philosophy-religion-and-human-values-sandwich"
                },
                {
                  "name": "Doctor of Philosophy Religion & Human Values",
                  "url": "https://rhv.ucc.edu.gh/programmes/phd-religion-and-human-values"
                }
              ],
              "diploma": [
                {
                  "name": "Diploma in Religion & Human Values - Sandwich",
                  "url": "https://rhv.ucc.edu.gh/programmes/diploma-religion-and-human-values-sandwich"
                }
              ],
              "certificate": []
            }
          },
          {
            "name": "Department of Theatre & Film Studies",
            "website": "https://theatrefilms.ucc.edu.gh/",
            "contact": "0245128794",
            "mail": "dtfs@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts Film Studies",
                  "url": "https://theatrefilms.ucc.edu.gh/programmes/bachelor-arts-film-studies"
                },
                {
                  "name": "Bachelor of Arts Theatre Studies",
                  "url": "https://theatrefilms.ucc.edu.gh/programmes/bachelor-arts-theatre-studies"
                }
              ],
              "postgraduate": [],
              "diploma": [],
              "certificate": []
            }
          }
        ]
      }
    ]
  }
}, // End of College 3 (Humanities and Legal Studies). Next is college 4

  {
  "college": {
    "name": "College of Health & Allied Sciences",
    "FacultiesAndSchools": [
      {
        "name": "School of Pharmacy and Pharmaceutical Sciences",
        "departments": [
          {
            "name": "Department of Pharmaceutical Chemistry",
            "website": "https://dpc.ucc.edu.gh/",
            "contact": "0249851736",
            "mail": "dopc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmaceutical Microbiology",
            "website": "https://dpm.ucc.edu.gh/",
            "contact": "0576204819",
            "mail": "dpm@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmacognosy & Herbal Medicine",
            "website": "https://pharmacognosy.ucc.edu.gh/",
            "contact": "0564918203",
            "mail": "dphm@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmaceutics",
            "website": "https://pharmaceutics.ucc.edu.gh/",
            "contact": "0265941807",
            "mail": "dphc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmacotherapeutics and Pharmacy Practice",
            "website": "https://dpp.ucc.edu.gh/",
            "contact": "0592184796",
            "mail": "dppp@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Medical Sciences",
        "departments": [
          {
            "name": "Department of Anatomy",
            "website": "https://anatomy.ucc.edu.gh/",
            "contact": "0597306841",
            "mail": "dan@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [],
            }
          },
          {
            "name": "Department of Community Based Experience and Service (COBES)",
            "website": "https://sms.ucc.edu.gh/cobes",
            "contact": "0554629018",
            "mail": "docbes@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Chemical Pathology",
            "website": "https://sms.ucc.edu.gh/chemical_pathology",
            "contact": "0558192736",
            "mail": "dcp@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Community Medicine",
            "website": "https://sms.ucc.edu.gh/community_medicine",
            "contact": "0542069487",
            "mail": "docm@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Haematology",
            "website": "https://sms.ucc.edu.gh/haematology",
            "contact": "0547813926",
            "mail": "doh@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Internal Medicine",
            "website": "https://sms.ucc.edu.gh/internal_medicine_and_therapeutics",
            "contact": "0203625981",
            "mail": "dim@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Obstetrics & Gynaecology",
            "website": "https://sms.ucc.edu.gh/obstetrics_and_gynaecology",
            "contact": "",
            "mail": "dog@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Medical Biochemistry",
            "website": "https://sms.ucc.edu.gh/medical_biochemistry",
            "contact": "0207362849",
            "mail": "dmb@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Medical Education and IT",
            "website": "https://sms.ucc.edu.gh/medical_education_and_it",
            "contact": "0205819473",
            "mail": "dmet@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Microbiology and Immunology",
            "website": "https://sms.ucc.edu.gh/microbiology_and_Immunology",
            "contact": "0248094362",
            "mail": "domi@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Paediatrics & Child Health",
            "website": "https://dpch.ucc.edu.gh/",
            "contact": "0245487109",
            "mail": "dpch@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmacology",
            "website": "https://sms.ucc.edu.gh/pharmacology_home",
            "contact": "0249632851",
            "mail": "dophar@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Physiology",
            "website": "https://sms.ucc.edu.gh/physiology",
            "contact": "",
            "mail": "dophy@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Psychological Medicine & Mental Health",
            "website": "https://sms.ucc.edu.gh/psychological_medicine_and_mental_health",
            "contact": "0241708964",
            "mail": "dopmh@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Surgery",
            "website": "https://sms.ucc.edu.gh/surgery",
            "contact": "0579842137",
            "mail": "dos@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pathology",
            "website": "https://sms.ucc.edu.gh/pathology",
            "contact": "0571683509",
            "mail": "dop@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Physician Assistant Studies",
            "website": "https://dpas.ucc.edu.gh/",
            "contact": "0577294061",
            "mail": "dpas@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Nursing and Midwifery",
        "departments": [
          {
            "name": "Department of Adult Health",
            "website": "https://dan.ucc.edu.gh/",
            "contact": "0579842137",
            "mail": "dah@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Maternal and Child Health",
            "website": "https://dmch.ucc.edu.gh/",
            "contact": "0571683509",
            "mail": "domch@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Mental Health",
            "website": "https://dmh.ucc.edu.gh/",
            "contact": "0577294061",
            "mail": "domh@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Public Health",
            "website": "https://publichealth.ucc.edu.gh/",
            "contact": "0573049826",
            "mail": "doph@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Allied Health Sciences",
        "departments": [
          {
            "name": "Department of Biomedical Sciences",
            "website": "https://sahs.ucc.edu.gh/",
            "contact": "0269315047",
            "mail": "dobs@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Medical Laboratory Science",
            "website": "https://medilab.ucc.edu.gh/",
            "contact": "0262746809",
            "mail": "doms@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (BSc.) Medical Laboratory Science (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science (BSc.) Medical Laboratory Science (sandwich)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Nutrition & Dietetics",
            "website": "https://dnd.ucc.edu.gh/",
            "contact": "0268592174",
            "mail": "dond@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (BSc.) degree in Dietetics (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science (BSc.) degree in Nutrition (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science (BSc.) degree in Nutrition (Sandwich Mode)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Health Information Management",
            "website": "https://dhim.ucc.edu.gh/",
            "contact": "0599541823",
            "mail": "dhiohim@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science Health Information Management (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science Health Information Management (Sandwich Mode)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Imaging Technology & Sonography",
            "website": "https://dmist.ucc.edu.gh/",
            "contact": "0593087165",
            "mail": "dits@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science Diagnostic Imaging Technology (Radiography) (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science Diagnostic Medical Sonography (Ultrasonography) (Regular Mode)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Sport & Exercise Science",
            "website": "https://sportscience.ucc.edu.gh/",
            "contact": "0596429807",
            "mail": "doses@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science Sport and Exercise Science (Regular Mode)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Optometry and Vision Science",
        "departments": [
          {
            "name": "Department of Clinical Optometry",
            "website": "https://dco.ucc.edu.gh/",
            "contact": "0506854271",
            "mail": "dco@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Ophthalmic Science",
            "website": "https://dos.ucc.edu.gh/",
            "contact": "0509413608",
            "mail": "dos@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Vision Science",
            "website": "https://dvs.ucc.edu.gh/",
            "contact": "0276804391",
            "mail": "dvs@ucc.eu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      }
    ]
  }
}, //End of College 4 (Health and Allied Sciences). Next is college 5

  {

    college: { }

  }, // And of College 5. End of all Colleges

  ], // Next object should be inserted below

  admissions: {
    
  }
}



// ============================================
// DOM ELEMENTS
// ============================================
const chatButton = document.getElementById("chatButton")
const chatWidget = document.getElementById("chatWidget")
const closeChat = document.getElementById("closeChat")
const chatInput = document.getElementById("chatInput")
const sendBtn = document.getElementById("sendBtn")
const chatMessages = document.getElementById("chatMessages")

// ============================================
// EVENT LISTENERS
// ============================================
chatButton.addEventListener("click", openChat)
closeChat.addEventListener("click", closeChatWidget)
sendBtn.addEventListener("click", sendMessage)
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage()
  }
})

// ============================================
// CHAT FUNCTIONS
// ============================================
function openChat() {
  chatWidget.classList.add("active")
  chatButton.classList.add("hidden")
  chatInput.focus()
}

function closeChatWidget() {
  chatWidget.classList.remove("active")
  chatButton.classList.remove("hidden")
}

function formatMessage(text) {
  // Convert markdown headers
  text = text.replace(/### (.*?)(\n|$)/g, "<h3>$1</h3>")
  text = text.replace(/## (.*?)(\n|$)/g, "<h2>$1</h2>")

  // Convert bold text
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

  // Convert links [text](url)
  text = text.replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2" target="_blank">$1</a>')

  // Convert bullet points
  text = text.replace(/^- (.*?)$/gm, "<li>$1</li>")
  text = text.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")

  // Convert line breaks
  text = text.replace(/\n/g, "<br>")

  return text
}

function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div")
  messageDiv.className = isUser ? "user-message" : "bot-message"

  const messagePara = document.createElement("div")

  if (isUser) {
    messagePara.textContent = message
  } else {
    messagePara.innerHTML = formatMessage(message)
  }

  messageDiv.appendChild(messagePara)
  chatMessages.appendChild(messageDiv)

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight
}

function showTypingIndicator() {
  const typingDiv = document.createElement("div")
  typingDiv.className = "bot-message typing-indicator"
  typingDiv.id = "typingIndicator"

  typingDiv.innerHTML = "<span></span><span></span><span></span>"

  chatMessages.appendChild(typingDiv)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator")
  if (typingIndicator) {
    typingIndicator.remove()
  }
}

async function sendMessage() {
  const message = chatInput.value.trim()

  if (!message) return

  // Check if API key is set
  if (OPENAI_API_KEY === "YOUR_OPENAI_API_KEY_HERE") {
    addMessage("Please set your OpenAI API key in the script.js file.", false)
    return
  }

  // Add user message
  addMessage(message, true)
  chatInput.value = ""

  // Disable input while processing
  chatInput.disabled = true
  sendBtn.disabled = true

  // Show typing indicator
  showTypingIndicator()

  try {
    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a helpful virtual assistant for the University of Cape Coast in Ghana. 
                        
Your job is to answer questions about admissions, programs, departments, and general information about the university.

Use ONLY the following data to answer questions. If the information is not in this data, politely say you don't have that information and suggest they contact the university directly.

UNIVERSITY DATA:
${JSON.stringify(schoolData, null, 2)}

Guidelines:
- Be friendly and professional
- Keep responses SHORT and concise (max 3-4 sentences for general questions)
- NEVER use curly brackets or square brackets in your responses
- Instead of listing items with brackets, use natural language: "The programs include Business, Medicine, and Engineering" instead of "[Business, Medicine, Engineering]"
- Only provide detailed lists when specifically asked
- When listing programs, show maximum 3-5 examples and say "and more" if there are others
- Format responses clearly with line breaks between sections
- If asked about admissions, direct them to the website
- Use bullet points sparingly, only when listing specific items requested
-List programmes related to the keyword in the users query.
-If asked for more information about a specific program, respond with program website and add you can contact the department of [xxx] for further assistance (02xxxxxx/ email)
-Cover Page for a particular programme must be in this format (Replace fields with appropriate names) If not available, list and leave it
University Of Cape Cost
College
School/Faculty
Department
Course code
Course Title
Index Number
Level
Lecturers name
- Write naturally as if talking to a person, not reading code or data`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))

      // Handle specific error codes
      if (response.status === 429) {
        throw new Error(
          "Rate limit exceeded. Please check your OpenAI billing at https://platform.openai.com/account/billing or wait a moment and try again.",
        )
      } else if (response.status === 401) {
        throw new Error("Invalid API key. Please check your OpenAI API key in script.js")
      } else if (response.status === 403) {
        throw new Error("API key doesn't have permission. Please check your OpenAI account settings.")
      } else {
        throw new Error(`API Error (${response.status}): ${errorData.error?.message || "Unknown error"}`)
      }
    }

    const data = await response.json()
    const aiMessage = data.choices[0].message.content

    // Remove typing indicator
    removeTypingIndicator()

    // Add AI response
    addMessage(aiMessage, false)
  } catch (error) {
    removeTypingIndicator()
    addMessage(error.message, false)
  } finally {
    // Re-enable input
    chatInput.disabled = false
    sendBtn.disabled = false
    chatInput.focus()
  }
}
