# wiki-parse

Parses 1st sentence of every page of wikipedia.

Requires separate download of `enwiki-20170820-pages-articles-multistream.xml`:

Torrent: 
1. Goto https://meta.wikimedia.org/wiki/Data_dump_torrents#English_Wikipedia
2. Under section "English Wikipedia", download "enwiki-20170820-pages-articles-multistream.xml.bz2"
3. Download torrent as per usual
3. Un-bzip2 the file

## Install

### NodeJS

Install NodeJS environment using your desired method.

Easiest way to do this is via NVM:
1. Goto https://github.com/creationix/nvm
2. Run the installation shell script from terminal:
   ```
   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
   ```
3. Close/reopen the terminal, then run:
   ```
   nvm install --lts
   ```

### wiki-parse

1. Clone repo
2. Switch to repo directory, then run: `npm install`
3. Run with: 
   ```
   node wiki-parse.js /path/to/wikipedia.enwiki-20170820-pages-articles-multistream.xml | less
   ```

## Sample Output

See `SAMPLE.txt` for example output for the 1st few dozen wikipedia articles.
