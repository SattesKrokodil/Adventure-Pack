import os, json, re

if __name__ == '__main__':
  files = os.listdir("recipes")

  for file in files:
    with open("recipes/" + file) as json_file:

      jsonFile = json.load(json_file)
      
      if "criteria" in jsonFile:
        
        jsonFile['criteria'] = {}
        
        with open("out/" + file, 'w') as f:
            json.dump(jsonFile, f, indent=2)