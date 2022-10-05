# [object Object] - Extract the domain name from a URL  [ ID: 514a024011ea4fb54200004b  (extract-the-domain-name-from-a-url-1) ]
# URL: https://www.codewars.com/kata/514a024011ea4fb54200004b
# Category: REFERENCE  |  Tags: PARSING | REGULAR EXPRESSIONS
# ******************************************************************************
import re
  
  
  def domain_name(url):
      return re.search("(//)?(www.)?([\w\-]+)(?=\.)", url).group(3)
