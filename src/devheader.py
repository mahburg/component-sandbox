#! c:\Python27\python.exe
#Python 2.7

#Scan for files of either type: .js or .jsx
#Look for comnet line at the top of the indicating devheader
#Populate devheader.json with the links and locations

import os
import subprocess as sp
import json
import sys
import re

def main():
    '''Main module function'''
    cwd = os.path.dirname(os.path.realpath(__file__))
    cwdLen = len(cwd)
    sp.run('echo {0}'.format(cwd), shell = True)

    fileList = walkDir(cwd, cwdLen)
    fileList = cleanList(fileList)
    sp.run('echo Found {0} JS/JSX files'.format(len(fileList)), shell = True)

    testComp = []
    for x in fileList:
        if checkJS(cwd, x):
            testComp.append(x)
    
    dicts = []
    for x in testComp:
        path, filename = os.path.split(x)
        title = filename
        if re.search('\.js$', filename):
            title = filename[:-3]
        else:
            title = filename[:-4]
        t = {'path': path, 'link': '/dev/'+ title.lower(), 'title': title}
        dicts.append(t)
    routes = []; imports = []
    for d in dicts:
        imports.append('import {1} from "../{0}";'.format(d['path']+'/'+ d['title'], d['title']))
        routes.append('\t\t\t\t\t<Route path="{0}" component={{{1}}} />'.format(d['link'], d['title']))
        # sp.run('echo {0}'.format(d['title']), shell = True)
    with open('src/dh.json', 'w') as dh:
        json.dump(dicts, dh)
    
    newRouter = []
    with open('src/DevRouter/DevRouter.js', 'r') as dr:
        importFlag = False
        routeFlag = False
        for line in dr:
            if re.search('Component Imports End', line):
                importFlag = False
            if re.search('</Switch>', line):
                routeFlag = False

            if not (importFlag or routeFlag):
                newRouter.append(line)
            if re.search('Component Imports Start', line):
                # newRouter.append(line)
                newRouter.append('\n'.join(imports)+'\n')
                importFlag = True
            if re.search('<Switch>', line):
                # newRouter.append(line)
                newRouter.append('\n'.join(routes)+'\n')
                routeFlag = True
    with open('src/DevRouter/DevRouter.js', 'w') as dr:
        for line in newRouter:
            dr.write(line)
    if len(sys.argv) > 1 and 'start' in sys.argv:
        sp.run('cowsay DevHeader finished. Running "npm start"', shell = True)
        sp.run('npm start', shell = True)
    else:
        sp.run('cowsay DevHeader has finished.', shell = True)
        
    

def checkJS(cwd, file):
    with open(cwd +'/'+ file, 'r') as file:
        fl = file.readline()
        # sp.run('echo {0}'.format(fl), shell = True)
        dev = '//dev-header: true'
        if re.search(dev, fl):
            return True
        else:
            return False
def walkDir(root, cwdLen): #Returns a list of strings, the strings are the paths of all the matching files
    outList = []
    js = '\.js$|\.jsx$'
    for path, subdirs, files in os.walk(root):
        for name in files:
            if re.search(js, name):
                outList.append(os.path.join(path,name)[cwdLen:])
                #print(os.path.join(path,name))
    return outList

def cleanList(dirty): #Returns a list where all backslahes are now slashes and the leading characher isn't a slash
    retList = []
    for x in dirty:
        retList.append(cleanFile(x))
    return retList

def cleanSaveName(inName):
    if inName[len(inName)-4:len(inName)] == '.txt':
        return inName[0:len(inName)-4]
    else:
        return inName

def cleanFile(fname):
    backslash = 92
    subpath = ""
    path_list = []
    for ch in fname:
        if (backslash == ord(ch)):
            if len(subpath):
                path_list.append(subpath)
                subpath = ""
        else:
            subpath += ch
    if len(subpath):      ## final name
        path_list.append(subpath)
    ret = ("/" + "/".join(path_list))
    ret = ret.lstrip('/')
    return ret

main()
